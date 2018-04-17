Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:[{
      name:'p',
      attrs:{
        class:'price_p'
      },
      children:[{
        name:'span',
        attrs:{
          class:'price_now'
        },
        children:[{
          type:'text',
          text:'¥520'
        }]
      },{
        name:'del',
        attrs:{
          class:'price_del'
        },
        children:[{
          type:'text',
          text:'¥169'
        }]
      },{
        name:'span',
        attrs:{
          class:'sall_person'
        },
        children:[{
          type:'text',
          text:'20人购买'
        }]
      }]
    }],
    copyText:[{
      name:'ul',
      attrs:{
        class:'copyList'
      },
      children:[{
        name:'li',
        attrs:{
          class:'copyItem'
        },
        children:[{
          type:'text',
          text:'拾艺学堂(爱琴海店)'
        }]
      },{
        name:'li',
        attrs:{
          class:'copyItem'
        },
        children:[{
          type:'text',
          text:'手工体验地址：北京市朝阳区中圣七街12号爱琴海购物公园二楼'
        }]
      },{
        name:'li',
        attrs:{
          class:'copyItem'
        },
        children:[{
          type:'text',
          text:'电话：(010)64226949'
        }]
      }]
    }],
    informationNodes:[{
      content:'地址：北京市朝阳区七圣中街12号爱琴海购物公园二楼',
      id:'address'
    },{
      content:'电话：010-64226949',
      id:'telphone'
    },{
      content:'手机：15011205011',
      id:'phone'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  infoTap:(e)=>{
    if (e.target.id == 'address' ){
      var addText = e.target.dataset.text;
      var addTextSplit = addText.slice(3);
      // 调用腾讯地图API，addTextSplit是文字地址描述
      var url = "http://apis.map.qq.com/ws/geocoder/v1/?address=" + addTextSplit + "&key=GMTBZ-BMUKQ-3355M-GMGWB-YVVHF-3PFTH";
      // 小程序发送请求
      wx.request({ 
        url: url,
        header:{
          'Content-Type': 'application/json'
        },
        // 请求成功处理函数
        success:(res)=>{
          // 返回经纬度
          var latitude = res.data.result.location.lat;
          var longitude = res.data.result.location.lng;
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          });
        }
      })
    }else if( e.target.id == 'telphone' || e.target.id == 'phone' ){
      var phoneText = e.target.dataset.text;
      wx.makePhoneCall({
        phoneNumber: phoneText
      })
    }
  },
  payTap:()=>{
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success:(res)=>{
        console.log(res);
      }
    })
  }
})