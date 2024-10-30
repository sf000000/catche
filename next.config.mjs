/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "randomuser.me" },
            { hostname: "avatar.vercel.sh" },
            { hostname: "catche.s3.us-east-2.amazonaws.com" }
        ]
    }
};

export default nextConfig;
