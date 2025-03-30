/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
            domains: ['cdn.sanity.io'],
            remotePatterns : ['cdn.sanity.io0']
        }
};

export default nextConfig;
