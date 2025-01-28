import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin({
    outputCss: {
        filePrefix: 'module', // .module.css로 출력
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/
        }

        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        dimensions: false,
                    },
                },
            ],
        })

        return config
    },
}

export default withVanillaExtract(nextConfig)
