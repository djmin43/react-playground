import ImageComponent from "@/app/components/image-component";
import satori, { type SatoriOptions } from "satori";

async function loadFont() {
	try {
		const response = await fetch(
			"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap",
		);
		const css = await response.text();
		const resource = css.match(
			/src: url\((.+)\) format\('(opentype|truetype)'\)/,
		);
		if (!resource) throw new Error("Failed to load font");
		const fontUrl = resource[1];
		return fetch(fontUrl).then((res) => res.arrayBuffer());
	} catch (error) {
		console.error("Failed to load font:", error);
		return null;
	}
}

export async function GET() {
	const fontData = (await loadFont()) as ArrayBuffer;

	const satoriOptions: SatoriOptions = {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Roboto",
				data: fontData,
				weight: 700,
				style: "normal",
			},
		],
	};

	const svg = await satori(<ImageComponent />, satoriOptions);

	console.log(svg);

	return new Response(svg, {
		headers: {
			"Content-Type": "image/svg+xml",
		},
	});
}
