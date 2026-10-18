/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 120,
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/compare',
        destination: '/vs',
        permanent: true,
      },
      {
        source: '/compare/:slug*',
        destination: '/vs/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
