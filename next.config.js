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
      {
        source: '/docs',
        destination: '/comingsoon',
        permanent: false,
      },
      {
        source: '/faqs',
        destination: '/comingsoon',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/comingsoon',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/comingsoon',
        permanent: false,
      },
      {
        source: '/auth/*',
        destination: '/comingsoon',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
