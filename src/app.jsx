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
      '/pages/neiye/index'
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
          iconPath:'../public/images/icon.png',
          selectedIconPath:'../public/images/icon.png'
        },
        {
          pagePath:'/pages/neiye/index',
          text:'内页',
          iconPath:'../public/images/icon.png',
          selectedIconPath:'../public/images/icon.png'
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
