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
}

export default nextConfig
