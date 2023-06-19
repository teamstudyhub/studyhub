/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname:"cloudflare-ipfs.com"
      }
    ]
  }
}

module.exports = nextConfig
