import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";

import state from "../store/index";

import {headTextAnimation, headContainerAnimation, headContentAnimation, slideAnimation} from "../config/motion";

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
			<motion.div className="home" {...slideAnimation('left')}>
				<motion.header {...slideAnimation('down')}>
					<img src="/assets/logo.svg" alt="logo" className="w-8 h-8 object-contain"/>
				</motion.header>
				<motion.div className="home-content" {...headContainerAnimation}>
					<motion.div {...headTextAnimation }>
						<h1 className="head-text">
							LET'S <br className="xl:block hidden" /> DO IT.
						</h1>
					</motion.div>
					<motion.div>
						<p> Experience our AI-powered 3D customization tool for personalized product design. Customize colors, patterns, materials,
							and finishes. Real-time visualization and predictive suggestions streamline the process. Generate a
							high-quality 3D rendering for production. <strong> Unleash your creativity effortlessly. </strong> {" "}</p>
					</motion.div>
				</motion.div>
			</motion.div>
			)
			}
		</AnimatePresence>
	)
}

export default Home;
