/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'sendspark-backend-code-challenge.vercel.app
/:path*',
      },
    ]
  },
}

export default nextConfig
