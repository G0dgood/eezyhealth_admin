import { useEffect } from 'react';


const VerifyLoader = ({ spinning, setSpinning, setState, svgPaths, state }: any) => {



	useEffect(() => {
		// Set the initial state to loading when component mounts
		setState(null);
		setSpinning(0);
	}, [setSpinning, setState]);

	const handleIteration = () => {
		if (spinning) {
			if (spinning > 1) {
				setSpinning(0);
			} else {
				if (state === true) {
					setState(true);
				} else if (state === false) {
					setState(false);
				}
				setSpinning((prevSpinning: number) => prevSpinning + 1);
			}
		}
	};



	return (
		<div className="loader-container_main">
			<div className="txtcenter mtm">
				<div className="loader-container">
					<svg className={`loader ${spinning === 0 && 'loading'} ${state === true ? 'success' : state === false ? 'error' : ''}`} viewBox="0 0 55 55" xmlSpace="preserve" onAnimationIteration={handleIteration}>
						<circle className="loader-circle" cx="27.5" cy="27.5" r="27.5" />
						<path className="loader-path" d={state === true ? svgPaths.success : state === false ? svgPaths.error : 'M17.5,42.3l23.2-23.2L23.9,35.9l-17-17c3.4-8.1,11.3-13.7,20.6-13.7c12.3,0,22.3,10,22.3,22.3 s-10,22.3-22.3,22.3S5.2,39.8,5.2,27.5c0-3.1,0.6-6,1.7-8.6'} />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default VerifyLoader;
