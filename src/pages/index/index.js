import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtActivityIndicator, AtInput, AtForm,AtButton, AtToast  } from "taro-ui";
import "./index.scss";
import { connect } from "@tarojs/redux";
import logo from './../../../public/images/logo.png'

@connect(({ index, loading }) => ({
  index,
  loading
}))
export default class Index extends Component {
  state = {
    value1: '',
    value2: ''
  };

  componentWillMount() {}

  componentDidMount() {
    // this.props
    //   .dispatch({
    //     type: "index/getData",
    //     payload: {}
    //   })
    //   .then(res => {
    //     if (res) {
    //       console.log(1111111);
    //     }
    //   });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };
  handleChangeUserName(e){
    this.setState({
      value1: e
    })
  }
  handleChangePassWord(e){
    this.setState({
      value2: e
    })
  }
  onSubmit(){
    const value = {
      user: this.state.value1,
      password: this.state.value2
    }
    const {dispatch} = this.props
    const {value1, value2} = this.state
    dispatch({
      type: 'index/validateForm',
      payload:{
        ...value
      }
    }).then((res)=>{
      if(res && res.code == '200'){
        const { id } = res
        console.log(id)
        if(id == 3){
          Taro.showToast({
            title: '登录成功！',
            icon: 'success'
          })
          setTimeout(()=>{
            Taro.switchTab({
              url: '/pages/acount/index'
            })
          },1500)
        }else{
          Taro.showToast({
            title: '账号密码错误',
            icon: 'none'
          })
        }
      }else{
        Taro.showToast({
          title: '服务器错误',
          icon: 'none',
          duration: 2000
        }).then(res => console.log(res))
      }
    })
  }
  onReset(){

  }
  render() {
    const { data } = this.props.index;
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
          <View className='indexBox'>
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
                placeholder="请输入密码"
                value={this.state.value2}
                onChange={this.handleChangePassWord.bind(this)}
              />
              <View className='formIndexAction'>
                <View onClick={()=>Taro.navigateTo({
                  url:'/pages/acount/findpassword/index'
                })}>忘记密码</View>
                <View>没有账号？注册</View>
              </View>
               <AtButton formType='submit' className='submitbtn'disabled={(this.state.value1.trim()!=''&&this.state.value2.trim()!='')?false:true}>登录</AtButton>
            </AtForm>
          </View>
        
      </View>
    );
  }
}
