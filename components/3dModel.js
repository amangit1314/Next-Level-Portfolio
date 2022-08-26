import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'

const ThreeDModel2 = ({ threeDUrl }) => {
    const loadedGltf = useLoader(GLTFLoader, threeDUrl)

    return (
        <>
            <primitive object={loadedGltf.scene}></primitive>
            <OrbitControls />
            <ambientLight />
        </>
    )
}

export default ThreeDModel2