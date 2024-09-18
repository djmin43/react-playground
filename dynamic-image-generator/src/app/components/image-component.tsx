import React from "react";

interface ImageComponentProps {
	description: string;
}

const ImageComponent = ({ description }: ImageComponentProps) => {
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
			}}
		>
			<p>{description}</p>
		</div>
	);
};

export default ImageComponent;
