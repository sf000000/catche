/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "randomuser.me" }, { hostname: "avatar.vercel.sh" }]
    }
};

export default nextConfig;
