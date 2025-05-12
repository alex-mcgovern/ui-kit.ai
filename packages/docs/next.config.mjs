/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    // Static HTML export
    webpack: (config, {}) => {
        config.module.rules.push({
            test: /\.md$/,
            // This is the asset module.
            type: 'asset/source',
        })
        return config
    },
}

export default nextConfig
