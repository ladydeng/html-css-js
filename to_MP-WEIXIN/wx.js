


// 这个文件必须建立nodejs服务，使用node来运行，才不会出现跨域，才能获取想要的参数



//获取微信小程序url Link 
// 官网文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-link.html


const request = require('request');
let access_token = ""

function getAccessToken(){
    var getUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=appid&secret=secret"
    request.get({
        'url': getUrl
    }, (error, response, body) => {
        let abody = JSON.parse(body);
        access_token = abody.access_token
        console.log(abody)

        wxUrlLink()
    })

}


function wxUrlLink(){
    var postUrl = 'https://api.weixin.qq.com/wxa/generate_urllink?access_token=' + access_token
    request.post({
        'url': postUrl,
        body: JSON.stringify({
            "path": "/pages/index/index",
        }),
        header: {
            'Content-Type': "application/json"
        }
    }, (error, response, body) => {
        let abody = JSON.parse(body);
        console.log(abody)
    })
}

getAccessToken()
