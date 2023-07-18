import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";

import state from "../store/index";
import { CustomButton } from '../components';

import {headTextAnimation, headContainerAnimation, headContentAnimation, slideAnimation} from "../config/motion";

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
			<motion.section className="home bg-amber-500" {...slideAnimation('left')}>
				<motion.header {...slideAnimation('down')}>
					<img
						src="/threejs.png"
						alt="logo"
						className="w-8 h-8 object-contain"
					/>
				</motion.header>
				<motion.div className="home-content" {...headContainerAnimation}>
					<motion.div {...headTextAnimation }>
						<h1 className="head-text">
							LET'S <br className="xl:block hidden" /> DO IT.
						</h1>
					</motion.div>
					<motion.div {...headContentAnimation} className="flex flex-col gap-5">
						<p className="max-w-md font-normal text-gray-600 text-base"> Experience our AI-powered 3D customization tool for personalized product design. Customize colors, patterns, materials,
							and finishes. Real-time visualization and predictive suggestions streamline the process. Generate a
							high-quality 3D rendering for production. <strong> Unleash your creativity effortlessly. </strong> {" "}</p>
						<CustomButton
							type="filled"
							handleClick={() => state.intro = false}
							customStyles="w-fit px-4 font-bold text-sm"
							title="Get Started"
						/>
					</motion.div>
				</motion.div>
			</motion.section>
			)
			}
		</AnimatePresence>
	)
}

export default Home;
