// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: 'menu-dev',
  traceUser:true
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    return await db.collection('user').where({
      name: 'cwl'
    }).get();
  } catch (e) {
    console.error(e);
  }

}