const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const optimizedImages = require('next-optimized-images')
// const withMDX = require('@next/mdx')({
// extension: /\.(md|mdx)$/,
// })
const readingTime = require('reading-time')

const withMdxEnhanced = require('next-mdx-enhanced')

const nextConfig = {
    experimental: {
        modern: true,
    },
    devIndicators: {
        autoPrerender: false,
    },
    // pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    // distDir: '../.next',
    // webpack: (config, { dev }) => {
    //     config.optimization.minimizer[0].options.terserOptions.compress.inline = false
    //     return config
    // },
}

module.exports = withPlugins(
    [
        [
            withMdxEnhanced({
                layoutPath: 'blog/layouts',
                defaultLayout: true,
                fileExtensions: ['mdx'],
                remarkPlugins: [],
                rehypePlugins: [],
                extendFrontMatter: {
                    process: mdxContent => ({
                        wordCount: mdxContent.split(/\s+/gu).length,
                        readingTime: readingTime(mdxContent),
                    }),
                },
            }),
        ],
        // [
        // withMDX({
        // pageExtensions: ['js', 'jsx', 'mdx', 'md'],
        // }),
        // ],
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
