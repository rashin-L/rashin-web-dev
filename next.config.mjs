/** @type {import('next').NextConfig} */


import pkg from './next-i18next.config.js';
const { i18n } = pkg;

const nextConfig = {

    swcMinify: true,
    productionBrowserSourceMaps: false,
    devIndicators: {
        buildActivity: false,
    }, experimental: {
         instrumentationHook: true,
        // webpackBuildWorker: true,
        serverSourceMaps: false,
        esmExternals: false
    },
     webpack: (config, { isServer }) => {
            config.resolve.fallback = { fs: false };
    
            return config;
        
    },

     images: {
        formats:['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.rashin-web-dev.com',
                pathname: '**',
            },
        ],
    },
    i18n,
    reactStrictMode: true,
    env: {
        REACT_APP_STAGE: process.env.REACT_APP_STAGE,
        // REACT_APP_STAGE: "production",

    },
    compiler: {
        removeConsole: {
            exclude: ['error'],
        },
    },

};



export default nextConfig;