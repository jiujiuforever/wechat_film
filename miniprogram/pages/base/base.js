// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'Hello',
    img:'/images/film.png',
    arr:['a','b','c','d'],
    list:[
      {
        name : 'jack',
        age:20
      },
      {
        name: 'luc',
        age: 21
    }],
    lslogin:false,
    num:0
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

  /**
   * 用户点击
   */
  onClick: function () {
    this.data.num++;
    this.setData({
      num: this.data.num + 1
    })
  },
  boxClick: function (event) {
    console.log('box 点击');
    console.log(event);
    this.data.num++;
    this.setData({
      num: this.data.num + 1
    })
  },
  childClick: function () {
    console.log('child 点击');
    this.data.num++;
    this.setData({
      num: this.data.num + 1
    })
  }
})