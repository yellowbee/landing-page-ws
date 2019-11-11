const axios = require("axios");
const config = require("../config/config");

const service = {
  sendSms: function(req, res) {
    console.log(`name: ${req.body.name}`);
    console.log(`mobile: ${req.body.mobile}`);
    console.log(`comment: ${req.body.comment}`);

    const queryBody = {
        appid: config.submail.appid,
        to: config.submail.toBruce,
        signature: config.submail.appkey,
        content: `【智虎】- 电话为 ${req.body.mobile} 姓名为 ${req.body.name} 的客户留言: ${req.body.comment}`
    };
    console.log(queryBody);
    axios.post('https://api.mysubmail.com/message/send.json', queryBody)
      .then((response) => {
        if (response.data.status !== 'success') {
          res.json({ success: false, errorCode: '0004' })
        } else {
          res.json({ success: true });
        }
      })
      .catch(function (err) {
        res.json({ success: false, errorCode: '0000', message: err })
      });
  }
};

module.exports = service;
