import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the sphere
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    
    // Floating animation
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 100, 100]}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function TorusKnot() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate on multiple axes
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.rotation.z = time * 0.1;
    
    // Floating animation
    meshRef.current.position.y = Math.sin(time * 0.7) * 0.15;
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 0.65 : 0.6}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
      <meshStandardMaterial
        color="#06b6d4"
        metalness={0.9}
        roughness={0.1}
        emissive="#0891b2"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function IcosahedronShape() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the shape
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.5;
    
    // Pulse scale
    const scale = 1 + Math.sin(time * 2) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Floating
    meshRef.current.position.y = Math.sin(time * 0.8) * 0.2;
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.3 : 1.2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#06b6d4"
        metalness={0.8}
        roughness={0.2}
        wireframe={true}
        emissive="#0891b2"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function TechShape3D({ variant = 'sphere' }) {
  const renderShape = () => {
    switch (variant) {
      case 'torus':
        return <TorusKnot />;
      case 'icosahedron':
        return <IcosahedronShape />;
      case 'sphere':
      default:
        return <AnimatedSphere />;
    }
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 0, 5]} intensity={1} color="#06b6d4" />
      {renderShape()}
    </Canvas>
  );
}
