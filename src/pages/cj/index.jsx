import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { AtActivityIndicator } from 'taro-ui'

@connect(({CJ, loading})=>({
  CJ,
  loading
}))
class CJ extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '出借'
  }

  render () {
    const {global} = this.props.loading
    return (
      <View className='index'>
        {global?<AtActivityIndicator mode='center'  content='加载中...' />:<Text>Hello cj!</Text>}
      </View>
    )
  }
}

export default CJ