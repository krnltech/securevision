/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/securevisions',
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
