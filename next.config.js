const { withSplit } = require('next-with-split')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSplit(nextConfig)
