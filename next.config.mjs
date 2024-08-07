/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production'
  },
  experimental: {
    forceSwcTransforms: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'gamehub-api.leovdn.dev'
      }
    ]
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
    NEXT_PUBLIC_STRAPI_GRAPHQL_API: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API
  }
}

import WithPWA from 'next-pwa'

const withPwa = WithPWA({
  dest: 'public', // Destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true // Skip waiting for service worker activation
})

// Export the combined configuration for Next.js with PWA support
export default withPwa(nextConfig)
