/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/waitlist',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
