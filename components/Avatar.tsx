// import * as THREE from "three";
// import React, { useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// type GLTFResult = GLTFLoader & {
//     nodes: {
//         Door_Right: THREE.Mesh;
//         Cube006_1: THREE.Mesh;
//         Cube007_1: THREE.Mesh;
//         Door_Left: THREE.Mesh;
//         Cube012: THREE.Mesh;
//         Cube023: THREE.Mesh;
//         Beam_Top: THREE.Mesh;
//         Wood_beams: THREE.Mesh;
//         Wood_beams001: THREE.Mesh;
//         Cube001: THREE.Mesh;
//         Cylinder_1: THREE.Mesh;
//         Cube002: THREE.Mesh;
//         Cube003: THREE.Mesh;
//         Cube004: THREE.Mesh;
//         Cube005: THREE.Mesh;
//         Cube008: THREE.Mesh;
//         Cube009: THREE.Mesh;
//         Cube010: THREE.Mesh;
//         Cube011: THREE.Mesh;
//         Cylinder001_1: THREE.Mesh;
//         Cube014: THREE.Mesh;
//         Cube013: THREE.Mesh;
//         Cylinder002: THREE.Mesh;
//         Cube017: THREE.Mesh;
//         Cube016: THREE.Mesh;
//         Cube015: THREE.Mesh;
//         Cube022: THREE.Mesh;
//         Cube021: THREE.Mesh;
//         Cube020: THREE.Mesh;
//         Cube019: THREE.Mesh;
//         Cube018: THREE.Mesh;
//         Cylinder003: THREE.Mesh;
//     };
//     materials: {
//         Wood: THREE.MeshStandardMaterial;
//         Rust: THREE.MeshStandardMaterial;
//         ["Rust.001"]: THREE.MeshStandardMaterial;
//         ["Rust.018"]: THREE.MeshStandardMaterial;
//         ["Rust.027"]: THREE.MeshStandardMaterial;
//         ["Wood Dark"]: THREE.MeshStandardMaterial;
//         ["Rust.002"]: THREE.MeshStandardMaterial;
//         ["Rust.003"]: THREE.MeshStandardMaterial;
//         ["Rust.004"]: THREE.MeshStandardMaterial;
//         ["Rust.005"]: THREE.MeshStandardMaterial;
//         ["Rust.006"]: THREE.MeshStandardMaterial;
//         ["Rust.008"]: THREE.MeshStandardMaterial;
//         ["Rust.007"]: THREE.MeshStandardMaterial;
//         ["Rust.020"]: THREE.MeshStandardMaterial;
//         ["Rust.019"]: THREE.MeshStandardMaterial;
//         ["Rust.022"]: THREE.MeshStandardMaterial;
//         ["Rust.021"]: THREE.MeshStandardMaterial;
//         ["Rust.026"]: THREE.MeshStandardMaterial;
//         ["Rust.025"]: THREE.MeshStandardMaterial;
//         ["Rust.024"]: THREE.MeshStandardMaterial;
//         ["Rust.023"]: THREE.MeshStandardMaterial;
//     };
// };

// type ActionName = "Door RightAction" | "Door LeftAction.001";
// type GLTFActions = Record<ActionName, THREE.AnimationClip>;

// export default function Model(props: JSX.IntrinsicElements["group"]) {
//     const group = useRef<THREE.Group>();
//     const { nodes, materials} = new GLTFLoader().load(
//         "/my.glb"
//     ) as GLTFResult;

//     const { actions } = useAnimations<GLTFActions>(animations, group);
//     return (
//         <group ref={group} {...props} dispose={null}>
//             <mesh
//                 name="Door_Right"
//                 geometry={nodes.Door_Right.geometry}
//                 material={nodes.Door_Right.material}
//                 position={[-0.46, 4.47, 1.82]}
//                 rotation={[0, 0, -Math.PI / 2]}
//                 scale={[1.74, 0.09, 1.77]}
//             >
//                 <mesh
//                     geometry={nodes.Cube006_1.geometry}
//                     material={nodes.Cube006_1.material}
//                     position={[0.09, 0.02, -0.17]}
//                     rotation={[0.07, 0, 0]}
//                     scale={[0.01, 0.09, 0.01]}
//                 />
//                 <mesh
//                     geometry={nodes.Cube007_1.geometry}
//                     material={nodes.Cube007_1.material}
//                     position={[1.94, 0.02, -0.17]}
//                     rotation={[0.07, 0, 0]}
//                     scale={[0.01, 0.09, 0.01]}
//                 />
//             </mesh>
//             <mesh
//                 name="Door_Left"
//                 geometry={nodes.Door_Left.geometry}
//                 material={nodes.Door_Left.material}
//                 position={[-0.46, 4.58, -1.84]}
//                 rotation={[0, 0, -Math.PI / 2]}
//                 scale={[1.74, 0.09, 1.77]}
//             >
//                 <mesh
//                     geometry={nodes.Cube012.geometry}
//                     material={nodes.Cube012.material}
//                     position={[-0.02, -0.03, 0.17]}
//                     rotation={[3, 0, 0]}
//                     scale={[0.01, 0.09, 0.01]}
//                 />
//                 <mesh
//                     geometry={nodes.Cube023.geometry}
//                     material={nodes.Cube023.material}
//                     position={[1.83, -0.03, 0.17]}
//                     rotation={[3, 0, 0]}
//                     scale={[0.01, 0.09, 0.01]}
//                 />
//             </mesh>
//             <mesh
//                 geometry={nodes.Beam_Top.geometry}
//                 material={nodes.Beam_Top.material}
//                 position={[-0.01, 6.29, -0.03]}
//                 scale={[0.37, 1, 0.41]}
//             />
//             <mesh
//                 geometry={nodes.Wood_beams.geometry}
//                 material={nodes.Wood_beams.material}
//                 position={[0, 2.78, 2.29]}
//                 scale={[0.41, 1, 0.4]}
//             />
//             <mesh
//                 geometry={nodes.Wood_beams001.geometry}
//                 material={nodes.Wood_beams001.material}
//                 position={[0, 2.79, -2.35]}
//                 scale={[0.41, 1, 0.4]}
//             />
//             <mesh
//                 geometry={nodes.Cube001.geometry}
//                 material={nodes.Cube001.material}
//                 position={[-0.42, 4.46, 2.28]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             >
//                 <mesh
//                     geometry={nodes.Cylinder_1.geometry}
//                     material={nodes.Cylinder_1.material}
//                     position={[0.22, -3.37, 24.06]}
//                     rotation={[-3.04, -0.02, -0.49]}
//                     scale={[5.27, 5.58, 2.35]}
//                 />
//             </mesh>
//             <mesh
//                 geometry={nodes.Cube002.geometry}
//                 material={materials["Rust.003"]}
//                 position={[-0.44, 4.58, 1.82]}
//                 rotation={[3.09, -0.01, 0]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube003.geometry}
//                 material={nodes.Cube003.material}
//                 position={[-0.44, 4.47, 2.29]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube004.geometry}
//                 material={materials["Rust.004"]}
//                 position={[-0.44, 4.47, 2.16]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube005.geometry}
//                 material={materials["Rust.005"]}
//                 position={[-0.44, 4.35, 1.82]}
//                 rotation={[-3.13, 0.01, -3.14]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube008.geometry}
//                 material={materials["Rust.006"]}
//                 position={[-0.44, 1.26, 2.16]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube009.geometry}
//                 material={nodes.Cube009.material}
//                 position={[-0.44, 1.26, 2.29]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube010.geometry}
//                 material={materials["Rust.007"]}
//                 position={[-0.44, 1.38, 1.82]}
//                 rotation={[3.09, -0.01, 0]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube011.geometry}
//                 material={nodes.Cube011.material}
//                 position={[-0.42, 1.26, 2.28]}
//                 rotation={[3.13, 0.02, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             >
//                 <mesh
//                     geometry={nodes.Cylinder001_1.geometry}
//                     material={nodes.Cylinder001_1.material}
//                     position={[0.22, -3.37, 24.06]}
//                     rotation={[-3.04, -0.02, -0.49]}
//                     scale={[5.27, 5.58, 2.35]}
//                 />
//             </mesh>
//             <mesh
//                 geometry={nodes.Cube014.geometry}
//                 material={materials["Rust.020"]}
//                 position={[-0.44, 4.35, -1.86]}
//                 rotation={[-0.05, -0.01, 0]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube013.geometry}
//                 material={materials["Rust.019"]}
//                 position={[-0.44, 4.58, -1.86]}
//                 rotation={[0.02, 0.01, -3.14]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cylinder002.geometry}
//                 material={nodes.Cylinder002.material}
//                 position={[-0.44, 4.46, -1.86]}
//                 rotation={[-Math.PI, 0, 0]}
//                 scale={[0.05, 0.11, 0.05]}
//             />
//             <mesh
//                 geometry={nodes.Cube017.geometry}
//                 material={nodes.Cube017.material}
//                 position={[-0.42, 4.47, -2.34]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube016.geometry}
//                 material={nodes.Cube016.material}
//                 position={[-0.44, 4.47, -2.35]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube015.geometry}
//                 material={materials["Rust.021"]}
//                 position={[-0.44, 4.47, -2.22]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube022.geometry}
//                 material={materials["Rust.026"]}
//                 position={[-0.44, 1.37, -1.86]}
//                 rotation={[0.02, 0.01, -3.14]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube021.geometry}
//                 material={materials["Rust.025"]}
//                 position={[-0.44, 1.14, -1.86]}
//                 rotation={[-0.05, -0.01, 0]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube020.geometry}
//                 material={materials["Rust.024"]}
//                 position={[-0.44, 1.26, -2.22]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube019.geometry}
//                 material={nodes.Cube019.material}
//                 position={[-0.44, 1.26, -2.35]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cube018.geometry}
//                 material={nodes.Cube018.material}
//                 position={[-0.42, 1.26, -2.34]}
//                 rotation={[-0.01, 0.03, -1.57]}
//                 scale={[0.02, 0.01, 0.02]}
//             />
//             <mesh
//                 geometry={nodes.Cylinder003.geometry}
//                 material={nodes.Cylinder003.material}
//                 position={[-0.44, 1.25, -1.86]}
//                 rotation={[-Math.PI, 0, 0]}
//                 scale={[0.05, 0.11, 0.05]}
//             />
//         </group>
//     );
// }

// useGLTF.preload("/my.glb");