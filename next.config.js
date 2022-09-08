/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/store/:path*',
        destination: `${process.env.MEDUSA_SERVER}/store/:path*`
      },
      {
        source: '/admin/:path*',
        destination: `${process.env.MEDUSA_SERVER}/admin/:path*` // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
