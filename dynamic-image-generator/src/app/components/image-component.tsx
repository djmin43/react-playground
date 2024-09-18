import React from "react";

interface ImageComponentProps {
	description: string;
	color: string;
}

const ImageComponent = ({ description, color }: ImageComponentProps) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "120px",
				width: "1200px",
				height: "630px",
				background: "white",
				color,
			}}
		>
			<p>{description}</p>
		</div>
	);
};

export default ImageComponent;
