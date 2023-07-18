import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Backdrop from "./Backdrop.jsx";
import CameraRig from "./CameraRig.jsx";
import Shirt from "./Shirt.jsx";

const CanvasModel = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			className="w-full max-w-full h-full transition-all ease-in"
			style={{position : 'absolute', zIndex: '-1'}}
		>
				<ambientLight intensity={0.5}/>
				<Environment preset="city"/>

				<CameraRig >
					<Backdrop />
					<Center>
						<Shirt />
					</Center>
				</CameraRig>
		</Canvas>
	)
}

export default CanvasModel;
