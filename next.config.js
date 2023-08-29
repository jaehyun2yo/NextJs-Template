const path = require("path"); // 1. path 선언

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")], // 2. sassOptions 옵션 추가
    // prependData: `@import "variable.scss"; @import "mixins.scss"; @import "levels.scss"; @import "@animations.scss";`,
  },
};

module.exports = nextConfig;
