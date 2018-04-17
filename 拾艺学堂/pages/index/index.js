//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabData:[
      {
        text: "体验课"
      },
      {
        text:"系统课"
      },{
        text:"储值卡"
      }
    ],
    currentTab:0,
    tastClassData:[
      {
        src:'/images/1.jpg',
        desc:'【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address:'北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/1.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/1.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/1.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/1.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/1.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市朝阳区七圣中街12号爱琴海购物公园二楼'
      }
    ],
    systemClassData: [
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/2.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      }
    ],
    vipCardData: [
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      },
      {
        src: '/images/3.jpg',
        desc: '【专业系统课】"陶"一段专注时光-成人零基础陶艺班',
        address: '北京市大兴区七圣中街12号爱琴海购物公园二楼'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  },
  clickTab:function(e){
    var that = this;
    if( this.data.currentTab == e.target.dataset.current ){
      return false;
    }else{
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  swiperTab:function(e){
    var that = this;
    this.setData({
      currentTab:e.detail.current
    })
  }
})
