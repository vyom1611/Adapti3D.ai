import {useRef} from "react";
import {AccumulativeShadows, RandomizedLight} from "@react-three/drei";

const Backdrop = () => {
    const shadows = useRef();

    return (
        <AccumulativeShadows
            position={[0, 0, -0.14]}
            temporal
            frames={60}
            alphaTest={0.85}
            scae={10}
            rotation={[Math.PI / 2, 0, 0]}
            ref={shadows}

        >
            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.35}
                ambient={0.25}
                position={[5, 5, -10]}
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.25}
                ambient={0.55}
                position={[-5, -5, 10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop;
