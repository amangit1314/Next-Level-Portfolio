import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
type Props = {}

function Model({ }: Props) {

    const loader = new GLTFLoader().load('/avatar.glb', (gltf) => {
        console.log(gltf)
    });
    // const avatar = loader.load(
    //     '/avatar.glb',
    //     String, function (error) {
    //         console.error(error)
    //     }
    // )

    return (
        <Suspense>
            fallback={null}
            <primitive object={loader} />
        </Suspense>
    );
}

export default Model