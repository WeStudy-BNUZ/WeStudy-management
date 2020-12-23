/*
 * @Author: your name
 * @Date: 2020-11-12 15:05:07
 * @LastEditTime: 2020-12-23 21:26:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /WeStudy-management/config/proxy.js
 */

export default {
  dev: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api.farm/': {
      target: 'https://api.fmg.net.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api.farm': '',
      },
    },
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
    '/api.test/': {
      target: 'http://47.115.174.112:8088',
      changeOrigin: true,
      pathRewrite: {
        '^/api.test': '',
      },
    },
  },
  pre: {
    '/api.farm/': {
      target: 'https://api.fmg.net.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api.farm': '',
      },
    },
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
    '/api.test/': {
      target: 'http://47.115.174.112:8088',
      changeOrigin: true,
      pathRewrite: {
        '^/api.test': '',
      },
    },
  },
};
