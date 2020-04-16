import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'

class Neiye extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '借款'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello jk!</Text>
      </View>
    )
  }
}

// export default connect(({ neiye }) => ({
//   neiye,
// }))(Neiye);

export default Neiye