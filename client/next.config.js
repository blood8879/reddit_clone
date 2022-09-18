/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.gravatar.com", 
      "localhost",
      "ec2-52-79-227-161.ap-northeast-2.compute.amazonaws.com"
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig
