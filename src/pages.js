module.exports = [
  {
    path: 'pages/main/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '购物商城',
      // enablePullDownRefresh: true,//是否开启当前页面的下拉刷新。
      navigationBarBackgroundColor: "#BDBD6f",
      navigationBarTextStyle: "white",
      backgroundColor: 'grey',
      backgroundTextStyle: "light"
    }
  },
  {
    path: 'pages/main/logs', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '文章列表111',
      enablePullDownRefresh: true,
      // navigationBarBackgroundColor: "#BDBD6f"
    }
  }]