const withSplit = require('next-with-split').withSplit({
  splits: {
    'test1': {
      path: '/',
      hosts: {
        original: 'split-example.vercel.app',
        'challenger-1': 'split-example-git-challenger-1-survaq-team.vercel.app'
      }
    }
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSplit(nextConfig)
