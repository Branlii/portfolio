/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
  // Will be available on both server and client
    staticFolder: '/static',
  },
}

module.exports = nextConfig
