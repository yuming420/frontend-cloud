import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '数据概览',
    redirect: '/home',
    component: Main,
    meta: {
      title: '数据概览',
      icon: 'logo-buffer',
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/data-map/page3')
      },
      {
        path: '/page2',
        name: 'p2',
        meta: {
          hideInMenu: false,
          title: 'page2',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/data-map/page2')
      },
      {
        path: '/page1',
        name: 'p3',
        meta: {
          hideInMenu: false,
          title: 'page1',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/data-map/page1')
      }
    ]
  },
  {
    path: '/edge_management',
    name: '边缘端管理',
    component: Main,
    meta: {
      title: '边缘端管理',
      icon: 'logo-buffer'
    },
    children: [
      {
        path: '',
        name: '边缘端连接管理',
        meta: {
          title: '边缘端连接管理',
          icon: 'logo-buffer'
        },
        component: () => import('@/view/edge-management/edge-management')
      },
      {
        path: 'create-edge',
        name: '新增边缘端',
        meta: {
          title: '新增边缘端',
          hideInMenu: true
        },
        component: () => import('@/view/edge-management/create-edge')
      },
      {
        path: 'modify-edge',
        name: '修改边缘端',
        meta: {
          title: '修改边缘端',
          hideInMenu: true
        },
        component: () => import('@/view/edge-management/modify-edge')
      },
      {
        path: 'edge-detail',
        name: '边缘端详情',
        meta: {
          title: '边缘端详情',
          icon: 'logo-buffer'
        },
        component: () => import('@/view/edge-management/edge-detail')
      }
    ]
  },
  // {
  //   path: '/data_management',
  //   name: '数据管理',
  //   component: Main,
  //   meta: {
  //     title: '数据管理',
  //     icon: 'ios-albums'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: '数据管理',
  //       meta: {
  //         title: '数据管理',
  //         icon: 'ios-albums'
  //       },
  //       component: () => import('@/view/data-management/data-management')
  //     }
  //   ]
  // },
  {
    path: '/task_management',
    name: '任务',
    component: Main,
    meta: {
      title: '任务',
      icon: 'ios-albums'
    },
    children: [
      {
        path: '',
        name: '任务管理',
        meta: {
          title: '任务管理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/task-management/task-management.vue')
      },
      {
        path: 'create_task',
        name: '新增任务',
        meta: {
          title: '新增任务',
          hideInMenu: true
        },
        component: () => import('@/view/task-management/create-task.vue')
      },
      {
        path: 'task_detail',
        name: '任务详情',
        meta: {
          title: '任务详情',
          hideInMenu: true
        },
        component: () => import('@/view/task-management/task-detail.vue')
      },
      {
        path: 'task_allocation',
        name: '任务分配',
        meta: {
          title: '任务分配',
          hideInMenu: true
        },
        component: () => import('@/view/task-management/task-allocation.vue')
      },
      {
        path: 'task_ongoing',
        name: '任务进展',
        meta: {
          title: '任务进展',
          hideInMenu: true
        },
        component: () => import('@/view/task-management/task-ongoing.vue')
      },
      {
        path: 'task_endian',
        name: '任务结果',
        meta: {
          title: '任务结果',
          hideInMenu: true
        },
        component: () => import('@/view/task-management/task-endian.vue')
      }
    ]
  },
  {
    path: '/process_management',
    name: '流程',
    component: Main,
    meta: {
      title: '工艺流程',
      icon: 'ios-albums'
    },
    children: [
      {
        path: '',
        name: '工艺流程管理',
        meta: {
          title: '工艺流程管理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/process-management/process-management')
      },
      {
        path: 'process-configuration',
        name: '流程配置',
        meta: {
          title: '流程配置',
          hideInMenu: true
        },
        component: () => import('@/view/process-management/process-configuration')
      },
      {
        path: 'process-modification',
        name: '流程编辑',
        meta: {
          title: '流程编辑',
          hideInMenu: true
        },
        component: () => import('@/view/process-management/process-modification')
      }
    ]
  },
  {
    path: '/bom_management',
    name: 'BOM单',
    component: Main,
    meta: {
      title: 'BOM单',
      icon: 'ios-albums'
    },
    children: [
      {
        path: '',
        name: 'BOM单管理',
        meta: {
          title: 'BOM单管理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/bom-management/bom-management.vue')
      },
      {
        path: 'create_bom',
        name: '新建BOM单',
        meta: {
          title: '新建BOM单',
          hideInMenu: true
        },
        component: () => import('@/view/bom-management/create-bom')
      },
      {
        path: 'bom_detail',
        name: 'BOM单详情',
        meta: {
          title: 'BOM单详情',
          hideInMenu: true
        },
        component: () => import('@/view/bom-management/bom-detail')
      },
      {
        path: 'add_material',
        name: '原料库',
        meta: {
          title: '原料库',
          hideInMenu: true
        },
        component: () => import('@/view/bom-management/add-material')
      },
      {
        path: 'material_management',
        name: '原料管理',
        meta: {
          title: '原料管理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/bom-management/material-management')
      }
    ]
  },
  {
    path: '/model_management',
    name: '模型',
    component: Main,
    meta: {
      title: '模型',
      icon: 'ios-albums'
    },
    children: [
      {
        path: '',
        name: '模型管理',
        meta: {
          title: '模型管理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/model-management/model-management.vue')
      },
      {
        path: 'create_model',
        name: '新增模型',
        meta: {
          title: '新增模型',
          hideInMenu: true
        },
        component: () => import('@/view/model-management/create-model.vue')
      },
      {
        path: 'modify_model',
        name: '修改模型',
        meta: {
          title: '修改模型',
          hideInMenu: true
        },
        component: () => import('@/view/model-management/modify-model.vue')
      },
      {
        path: 'send_management',
        name: '修改模型',
        meta: {
          title: '修改模型',
          hideInMenu: true
        },
        component: () => import('@/view/model-management/send-management.vue')
      }
    ]
  },
  {
    path: '/feedback_management',
    name: '反馈',
    component: Main,
    meta: {
      title: '反馈',
      icon: 'ios-albums'
    },
    children: [
      {
        path: '',
        name: '反馈处理',
        meta: {
          title: '反馈处理',
          icon: 'ios-albums'
        },
        component: () => import('@/view/feedback-management/feedback-management.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
