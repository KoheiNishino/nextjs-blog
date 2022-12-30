/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
})
