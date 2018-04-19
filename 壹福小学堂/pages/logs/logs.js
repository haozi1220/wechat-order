//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    callNumber:'010-64226949',
    logs: [],
    nodes:[{
      name:'ins',
      attrs:{
        class: 'call_phon'
      },
      children:[{
        type:'text',
        text:'010-64226949'
      }]
    }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  tap(e){
    // 获取电话号码
    let callNumber = e.currentTarget.dataset.callnumber;
    wx.makePhoneCall({
      phoneNumber: callNumber,
    })
  },
  loginEnter(){
    wx.login({
      success:(res)=>{
        if(res.code){
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd7341cba6fa19fde&secret=993cce62891dae485fb67f8aeba9efc7&js_code=res.code&grant_type=authorization_code',
            data:{
              code:res.code
            },
            success:()=>{
              console.log(data);
            }
          })
        }
      }
    })
  }
})
