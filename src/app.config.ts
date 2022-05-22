export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/usercenter/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#666666',
    selectedColor: '#FF5F15',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        pagePath: 'pages/usercenter/index',
        text: '我的'
      }
    ]
  }
})
