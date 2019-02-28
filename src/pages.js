module.exports = [
  {
    path: 'pages/main/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '购物商城',
      // enablePullDownRefresh: true,//是否开启当前页面的下拉刷新。
      navigationBarBackgroundColor: "#BDBD6f",
      navigationBarTextStyle: "white",
      // backgroundColor: 'white',
      backgroundTextStyle: "light",
      usingComponents: {
        "van-button": "/static/vant/button/index",
        "van-popup": "/static/vant/popup/index",
        "van-picker": "/static/vant/picker/index",
        "i-button": "/static/iview/button/index"
      }
    }
  },
  {
    path: 'pages/main/logs', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '文章列表111',
      enablePullDownRefresh: true,
      // navigationBarBackgroundColor: "#BDBD6f"
    }
  },
  {
    path: 'pages/chooseCity/chooseCity', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '选择城市'
    }
  },
  {
    path: 'pages/search/search',
    config: {
      navigationBarTitleText: '美团',
      usingComponents: {
        "van-search": "/static/vant/search/index",
      
      }
    }
  },
  {
    path: 'pages/detail/detail',
    config: {
      navigationBarTitleText: '团购详情',
      usingComponents: {
        "van-icon": "/static/vant/icon/index"
      }
    }
  },
  {
    path: 'pages/userComment/userComment',
    config: {
      navigationBarTitleText: '用户评价'
    }
  }
]