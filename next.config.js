const withSplit = require('next-with-split').withSplit({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSplit(nextConfig)
