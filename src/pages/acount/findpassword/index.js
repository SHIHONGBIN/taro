import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtActivityIndicator, AtInput, AtForm,AtButton, AtToast  } from "taro-ui";
import './index.scss'
import logo from './../../../../public/images/logo.png'
import { connect } from '@tarojs/redux'

@connect(({ findpassword, loading }) => ({
  findpassword,
  loading
}))
class FindPassWord extends Component {
  state = {
    value1:'',
    value2:''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '找回密码'
  }

  handleChangeUserName(){

  }
  handleChangePassWord(){

  }
  onSubmit(){

  }
  onReset(){

  }
  render() {
    const { global } = this.props.loading;
    // const  global  = false
    return (
      <View className="index">
        {global ? (
          <AtToast 
          isOpened 
          text="登录中..." 
          status="loading"
          hasMask='true'
          />
        ) : ""}
          <View className='indexBox indexBox2'>
            <img src={logo} style={{display:'block', textAlign:'center', margin:'7vh auto'}} />
            <AtForm
             onSubmit={this.onSubmit.bind(this)}
             onReset={this.onReset.bind(this)}
            >
              <AtInput
                name="value1"
                // title="用户名"
                type="text"
                placeholder="请输入用户名"
                value={this.state.value1}
                onChange={this.handleChangeUserName.bind(this)}
              />
              <AtInput
                name="value2"
                // title="密码"
                type="password"
                placeholder="请输入密码ww"
                value={this.state.value2}
                onChange={this.handleChangePassWord.bind(this)}
              />
              <View className='formIndexAction'>
                <View>忘记密码</View>
                <View>没有账号？注册</View>
              </View>
               <AtButton formType='submit' className='submitbtn'disabled={(this.state.value1.trim()!=''&&this.state.value2.trim()!='')?false:true}>登录</AtButton>
            </AtForm>
          </View>
        
      </View>
    );
  }
}


export default FindPassWord