const app = getApp()
Page({
  data:{
motto:'  '
  }
  ,
  validate: function () {
    wx.navigateTo({
      url: '../jiankong/jiankong',
    })
  },

  onLoad: function () {
    var that = this;
    const requestTask = wx.request({
      url: 'http://api.heclouds.com/devices/503083986/datapoints?datastream_id=d&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'Lz6kPLRd=Qe9Qt=JkoUPnkyLLys='
      },
      success: function (res) {
        var app = getApp();
        app.globalData.d = res.data.data.datastreams[0]
        console.log(app.globalData.d)
        if (app.globalData.d.datapoints[1].value == '1.00') {
          that.setData({
            motto: '暂时没有快递，点击查询'
          })
        }
        if (app.globalData.d.datapoints[1].value == '0.00') {
          that.setData({
            motto: '您有新的快递'
          })
        }

      },
      fail: function (res) {
        console.log("fail!!!")
      },
      complete: function (res) {
        console.log("end")
      }
    })
  },

})