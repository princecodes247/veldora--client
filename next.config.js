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
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/waitlist',
        
      },
      {
        source: '/docs',
        destination: '/comingsoon',
        
      },
      {
        source: '/faqs',
        destination: '/comingsoon',
        
      },
      {
        source: '/about',
        destination: '/comingsoon',
        
      },
      {
        source: '/contact',
        destination: '/comingsoon',
        
      },
      {
        source: '/auth/:type',
        destination: '/comingsoon',
        
      },
    ]
  },
}

module.exports = nextConfig
