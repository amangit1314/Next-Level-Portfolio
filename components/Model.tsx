// interface group {
//     current: {
//         rotation: {
//             x: number;
//             y: number;
//         }
//     }
// }

// interface actions {
//     current: {
//         idle: {
//             play: () => void;
//         }
//     }
// }

// import { useEffect, useRef } from 'react';

// const Model = () => {
//     /* Refs*/
//     const group: group = useRef();
//     const actions: actions = useRef();

//     /* State */
//     const [model, setModel] = useState<Object3D | null>(null);
//     const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

//     /** Load Model */
//     useEffect(() => {
//         const loader = new GLTFLoader();
//         loader.load()
//     })
//     return (
//         <div>Model</div>
//     )
// }

// export default Model