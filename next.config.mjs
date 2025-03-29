/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // WebAssembly 지원 설정
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // box2d-wasm 파일 처리를 위한 설정
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    });

    return config;
  },
};

export default nextConfig;