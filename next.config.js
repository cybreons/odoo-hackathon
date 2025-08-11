/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react']
  }
}

module.exports = nextConfig