import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'


import { Provider } from "@tarojs/redux";
import dva from './utils/dva'
import models from './models/index';

require('./../mock/index')

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();   //  getStore是一个函数！！！要执行！！！



class App extends Component {

  componentDidMount () {


}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      
      'pages/index/index',
      'pages/acount/findpassword/index',
      'pages/jk/index',
      'pages/cj/index',
      'pages/acount/index',
      
      'pages/news/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:'#fff',
      selectedColor:'#ff5d73',
      backgroundColor:'#000000',
      list:[
        {
          pagePath:'/pages/index/index',
          text:'首页',
          iconPath:'../public/images/home1.png',
          selectedIconPath:'../public/images/home.png'
        },
        {
          pagePath:'/pages/cj/index',
          text:'出借',
          iconPath:'../public/images/cj1.png',
          selectedIconPath:'../public/images/cj.png'
        },
        {
          pagePath:'/pages/jk/index',
          text:'借款',
          iconPath:'../public/images/jk1.png',
          selectedIconPath:'../public/images/jk.png'
        },
        {
          pagePath:'/pages/acount/index',
          text:'账户',
          iconPath:'../public/images/acount1.png',
          selectedIconPath:'../public/images/acount.png'
        },
        {
          pagePath:'/pages/news/index',
          text:'资讯',
          iconPath:'../public/images/news1.png',
          selectedIconPath:'../public/images/news.png'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}><Index /></Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
