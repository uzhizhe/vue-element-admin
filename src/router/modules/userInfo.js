/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/user/infomation',
  name: 'UserInfo',
  meta: {
    title: '用户',
    icon: 'user'
  },
  children: [
    {
      path: 'infomation',
      component: () => import('@/views/user/infomation/infomation1'),
      name: '用户信息',
      redirect: '/user/infomation',
      meta: { title: '用户信息' },
      children: [
        {
          path: 'infomation1',
          component: () => import('@/views/user/infomation/infomation1'),
          name: '用户信息1',
          meta: { title: '用户信息1' }
        },
        {
          path: 'infomation2',
          component: () => import('@/views/user/infomation/infomation2'),
          name: '用户信息2',
          meta: { title: '用户信息2' }
        }
      ]
    },
    {
      path: 'permission',
      component: () => import('@/views/user/permission/permission1'),
      name: '用户权限',
      redirect: '/user/permission',
      meta: { title: '用户权限' },
      children: [
        {
          path: 'permission1',
          component: () => import('@/views/user/permission/permission1'),
          name: '用户权限1',
          meta: { title: '用户权限1' }
        },
        {
          path: 'permission2',
          component: () => import('@/views/user/permission/permission2'),
          name: '用户权限2',
          meta: { title: '用户权限2' }
        }
      ]
    },
    {
      path: 'order',
      component: () => import('@/views/user/orders/order1'),
      name: '用户订单',
      redirect: '/user/orders',
      meta: { title: '用户订单' },
      children: [
        {
          path: 'order1',
          component: () => import('@/views/user/orders/order1'),
          name: '用户订单1',
          meta: { title: '用户订单1' }
        },
        {
          path: 'order2',
          component: () => import('@/views/user/orders/order2'),
          name: '用户订单2',
          meta: { title: '用户订单2' }
        }
      ]
    }
  ]
}

export default userRouter
