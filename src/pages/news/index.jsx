import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from 'dva'

class Neiye extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '资讯'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello news!</Text>
      </View>
    )
  }
}

// export default connect(({ neiye }) => ({
//   neiye,
// }))(Neiye);

export default Neiye