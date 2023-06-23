/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir : true
  },
  reactStrictMode: true,
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = nextConfig