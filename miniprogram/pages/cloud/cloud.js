// pages/cloud/cloud.js
wx.cloud.init();
const db = wx.cloud.database();//初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  queryData: function () {
    console.log('shuju');
    wx.cloud.callFunction({
      name: 'queryData'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  batchdel: function () {
    console.log('批量删除');
    wx.cloud.callFunction({
      name: 'batchDel'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  },

  get: function () {
    console.log('获取用户信息');
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  sum:function(){
    console.log('dasd');
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:1,
        b:3
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /**
  * 插入数据库
  */
  insert: function () {
    // db.collection('user').add({
    //   data:{
    //     name:'cwl',
    //     age:28
    //   },
    //   success: res => {
    //     console.log(res);
    //   },
    //   fail: err => {
    //     console.log(err);
    //   }
    // })
    db.collection('user').add({
      data:{
        name:'cwl',
        age:20
      }
    }).then(res => {
      console.log(res);
    }
    ).catch(err=>{
      console.log(err);
    })
  },

  /**
    * 更新数据库
    */
  update: function () {
    db.collection('user').doc('2cdae5505dafc65b025793fb23d9d11b').update({
      data: {
        name: 'cwl',
        age: 68
      }
    }).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    })
  },

  query:function(){
    db.collection('user').where({
      name:'cwl'
    }).get().then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  },

  del:function(){
    db.collection('user').doc('0bb54c1c5dafb1cb024c930e5c7ddce4').remove()
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
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

  }
})