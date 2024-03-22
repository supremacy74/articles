/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hb.bizmrg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '366.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'backoffice.cwzw6gg24a-llcapteka1-p1-public.model-t.cc.commerce.ondemand.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

export default nextConfig
