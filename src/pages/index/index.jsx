import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './index.scss'
import { connect } from '@tarojs/redux'


@connect(({index, loading})=>({
  index,
  loading
}))
export default class Index extends Component {
    state = {
      name:1
    }
  
  componentWillMount () {
   
   }

  componentDidMount () {
   
    this.props.dispatch({
      type: 'index/getData',
      payload:{}
    }).then((res)=>{if(res){console.log(1111111)}})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    const {data} = this.props.index
    const {global} = this.props.loading
    return (

      <View className='index'>
        {global?<AtActivityIndicator mode='center'  content='加载中...' >
        {/* <View></View> */}
        
        {/* <Text>Hello wosrld!s</Text> */}
        </AtActivityIndicator>:data?data.id:''}
      </View>

    )
  }
}

