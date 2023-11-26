// const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  // i18n
  webpack: (config, { isServer }) => {
    // 如果是服务器端渲染，不需要包含 React 和 ReactDOM
    if (isServer) {
      return config;
    }

    // 从外部链接引入 React 和 ReactDOM
    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
    };

    return config;
  },
};
