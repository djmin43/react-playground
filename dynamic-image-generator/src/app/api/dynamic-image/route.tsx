import ImageComponent from "@/app/components/image-component";
import { storage } from "@/app/firebase/core";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";
import satori, { type SatoriOptions } from "satori";
import sharp from "sharp";

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

export const uploadFile = async (file: File, folder: string) => {
	try {
		const filename = crypto.randomUUID();
		const storageRef = ref(
			storage,
			`${folder}${filename}.${file.name.split(".").pop()}`,
		);
		const res = await uploadBytes(storageRef, file);
		const downloadURL = await getDownloadURL(res.ref);

		return downloadURL;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export async function POST(request: Request) {
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

	const body = await request.formData();
	const description = body.get("description") as string;

	const svg = await satori(
		<ImageComponent description={description ?? ""} />,
		satoriOptions,
	);
	const svgBuffer = Buffer.from(svg);

	const pngBuffer = await sharp(svgBuffer).png().toBuffer();

	const pngFile = new File([pngBuffer], "generated-image.png", {
		type: "image/png",
	});

	const downloadURL = await uploadFile(pngFile, "test/");

	const url = new URL(
		`/?ogImage=${encodeURIComponent(downloadURL)}`,
		request.url,
	);
	return NextResponse.redirect(url);
}
