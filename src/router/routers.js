export const defaultRouter = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/main',
    name: 'mainFrame',
    component: () => import('@/views/MainFrame/MainFrameView.vue')
  }
]

export const menuRouter = [
  {
    path: '/excelImport',
    name: 'ExcelImport',
    component: () => import('@/views/Excel/ExcelImport.vue')
  },
  {
    path: '/excelExport',
    name: 'ExcelExport',
    component: () => import('@/views/Excel/ExcelExport.vue')
  }
]
