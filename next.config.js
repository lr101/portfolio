/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import path from "path";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.simpleicons.org',
            pathname: '/**',
        
        },
        ],
    },
    output: 'standalone'
};

export default config;
