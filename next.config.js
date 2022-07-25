/** @type {import('next').NextConfig} */

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
      require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer({ nextConfig })
