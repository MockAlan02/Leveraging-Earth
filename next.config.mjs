/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [ "https://imgbb.com/", "i.ibb.co"],
  },
};

export default nextConfig;
