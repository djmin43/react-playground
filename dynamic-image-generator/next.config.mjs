/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactServerComponents: {
			use: ["@react-email/tailwind"],
		},
	},
};

export default nextConfig;
