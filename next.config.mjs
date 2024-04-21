/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vlhp7vnbo3iooptf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
