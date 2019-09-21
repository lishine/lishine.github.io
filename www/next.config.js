const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
    distDir: '../.next',
    experimental: { publicDirectory: true },
    // exportPathMap: async function(
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    // ) {
    //     return {
    //         '/': { page: '/portfolio' },
    //         '/portfolio': { page: '/portfolio' },
    //         '/contact': { page: '/contact' },
    //         '/resume': { page: '/resume' },
    //     }
    // },
    // target: 'serverless',
    webpack: (config, { dev }) => {
        config.optimization.minimizer[0].options.terserOptions.compress.inline = false
        // 	// Perform customizations to config
        // 	config.module.rules = config.module.rules.map(rule => {
        // 		if (rule.loader === 'babel-loader') {
        // 			rule.options.cacheDirectory = false
        // 		}
        // 		return rule
        // 	})
        // 	// Important: return the modified config
        return config
    },
}

// const _withBundleAnalyzer = withBundleAnalyzer({
// 	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
// 	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
// 	bundleAnalyzerConfig: {
// 		server: {
// 			analyzerMode: 'static',
// 			reportFilename: '../bundles/server.html',
// 		},
// 		browser: {
// 			analyzerMode: 'static',
// 			reportFilename: '../bundles/client.html',
// 		},
// 	},
// })

module.exports = withPlugins(
    [
        [
            optimizedImages,
            {
                optimizeImagesInDev: true,
            },
        ],
        [withCSS],
        [withSass],
    ],
    nextConfig
)
