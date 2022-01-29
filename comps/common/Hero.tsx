/** @format */

import Typography from "@mui/material/Typography";

const Hero = (props) => {
	console.log("props==>", props.imageSrc);
	return props.classString == "hero_banner" ? (
		<div
			className='hero hero_banner'
			style={{
				backgroundImage: `url(${props.imageSrc})`,
				backgroundPosition: `${props.bgPosition}`,
				backgroundRepeat: `${props.bgRepeat}`,
				backgroundColor: `${props.bgColor}`,
				backgroundSize: `${props.bgSize}`,
			}}>
			<Typography variant='h1' color='#fff' style={{ fontWeight: "bold" }}>
				{props.title}
			</Typography>
		</div>
	) : (
		<div
			className='hero'
			style={{
				backgroundImage: `url(${props.imageSrc})`,
				backgroundPosition: `${props.bgPosition}`,
				backgroundRepeat: `${props.bgRepeat}`,
				backgroundColor: `${props.bgColor}`,
				backgroundSize: `${props.bgSize}`,
			}}>
			<Typography variant='h1' color='#fff' style={{ fontWeight: "bold" }}>
				{props.title}
			</Typography>
		</div>
	);
};

export default Hero;
