/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.media-amazon.com'
      }
    ],
    domains: ['i.pravatar.cc', 'images.adsttc.com', 'cdn.pixabay.com']
  }
}

module.exports = nextConfig
