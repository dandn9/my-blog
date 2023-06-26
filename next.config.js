/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	 mdxRs: true,
	// },
}

const withMDX = require('@next/mdx')({
	options: {
		rehypePlugins: [[require('rehype-pretty-code'), {}]],
	},
})
module.exports = withMDX(nextConfig)