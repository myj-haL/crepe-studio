const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/common/components'),
      '@style': path.resolve(__dirname, 'src/assets/scss'),
      '@hook': path.resolve(__dirname, 'src/common/hook'),
      images: path.resolve(__dirname, 'src/assets/img'),
      video: path.resolve(__dirname, 'src/assets/video'),
    },
  },
  style: {
    postcss: {
      mode: 'file',
    },
  }
};
