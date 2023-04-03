const { withSplit } = require('next-with-split')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  splits: {
    'challenger-1': {
      path: '/',
      hosts: {
        original: 'split-example.vercel.app',
        'challenger-1': 'split-example-git-challenger-1-survaq-team.vercel.app'
      }
    }
  },
}

module.exports = withSplit(nextConfig)
