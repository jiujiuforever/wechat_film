// pages/upload/upload.js
wx.cloud.init();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },

  getFile: function() {
    wx.cloud.callFunction({
      name: 'login',
    }).then(res => {
      db.collection('menu_list').where({
        _openid: res.result._openid
      }).get().then(dbres => {
        console.log(dbres);
        this.setData({
          images: dbres.data
        })
      }).catch(dberr => {

      })
    }).catch(err => {

    })

  },

  downFile: function(event) {
    console.log(event);
    wx.cloud.downloadFile({
      fileID: event.target.dataset.url,
      success: res => {
        //返回临时文件路径
        console.log(res.tempFilePath)
        //保存图片到手机相册
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功'
            })
          }
        })
      },
      fail: console.error
    })
  },

  /**
   * 文件上传
   */
  upFile: function() {
    //选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(chooseResult) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = chooseResult.tempFilePaths[0]
        console.log(tempFilePaths);
        //将图片上传到云存储空间
        wx.cloud.uploadFile({
          //制定上传到的云路径
          cloudPath: new Date().getTime() + '.png',
          //文件上传临时路径
          filePath: tempFilePaths,
          //成功回调
          success: res => {
            console.log('上传成功', res);
            db.collection('menu_list').add({
              data: {
                url: res.fileID
              }
            }).then(rep => {
              console.log(rep);
            }).catch(error => {
              console.error(error);
            })
          },
          fail: error => {
            console.error('失败', error);
          }
        })
      }
    })
    /*  wx.uploadFile({
       url: '',
       filePath: '',
       name: '',
     }) */
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})