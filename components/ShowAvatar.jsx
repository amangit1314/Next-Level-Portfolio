import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
function Model(props) {
    const { scene } = useGLTF("/avatar.glb");
    return <primitive object={scene} />;
}

export function ShowAvatar() {
    return (
        <div style={{height: "100vh", backgroundColor: "transparent"}}>
            <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
                <pointLight position={[10, 10, 10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}