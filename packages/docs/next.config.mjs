/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {}) => {
        config.module.rules.push({
            test: /\.md$/,
            // This is the asset module.
            type: 'asset/source',
        })
        return config
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
