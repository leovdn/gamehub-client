/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production'
  },
  experimental: {
    forceSwcTransforms: true
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
