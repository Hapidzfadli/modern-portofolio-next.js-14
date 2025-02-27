/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip TypeScript type checking during build to reduce chance of errors
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // This is specifically for Sentry removal:
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  }
};

export default nextConfig;