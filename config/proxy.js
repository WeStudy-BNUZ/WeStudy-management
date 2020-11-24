/*
 * @Author: your name
 * @Date: 2020-11-12 15:05:07
 * @LastEditTime: 2020-11-23 22:58:56
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
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
