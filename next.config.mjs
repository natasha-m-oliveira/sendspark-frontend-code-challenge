/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination:
            'https://sendspark-backend-code-challenge.vercel.app/:path*',
        },
      ],
    }
  },
}

export default nextConfig
