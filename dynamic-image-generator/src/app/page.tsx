import type { Metadata } from "next";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	const ogImage = (searchParams?.ogImage as string) ?? "";

	return {
		title: "dynamic og",
		description: "this website generates dynamic og image",
		openGraph: {
			images: [ogImage],
		},
	};
}
export default function Page() {
	return (
		<div>
			<h1>dynamic image generator</h1>
			<form action="/api/dynamic-image" method="POST">
				<label htmlFor="description">description</label>
				<input type="text" name="description" />
				<button type="submit">submit</button>
			</form>
		</div>
	);
}
