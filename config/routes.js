/*
 * @Author: your name
 * @Date: 2020-11-12 15:05:07
 * @LastEditTime: 2020-11-12 16:25:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /WeStudy-management/config/routes.js
 */
export default [
  {
    path: '/',
    routes: [
      {
        path: '/sign',
        //component: '../layouts/UserLayout',
        routes: [
          {
            path: '/sign',
            redirect: '/sign/user/login',
          }, {
            path: '/sign/user',
            routes: [{
              path: '/sign/user/login',
              component: './user/login/index',
            }
            ],
          }
        
        ],
      },
      {
        path: '/page',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/page',
            redirect: '/page/seek/index',
          },
          {
            path: '/page/seek',
            name: '统计页',
            icon: 'dashboard',
            routes: [
              {
                path: '/page/seek/index',
                name: '数据统计',
                icon: 'setting',
                component: './Welcome',
              }
             
            ],
          },

          {
            component: './404',
          }
        ],
      },
      {
        component: './user/login/index',
      }
    ],
  }
];
