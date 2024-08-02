<template>
	<view>
        <!-- 可以在url拼接参数，在html页面接收一下 -->
        <!-- 
            注意：
               小程序平台， src 指向的链接需登录小程序管理后台配置域名白名单。App和H5 无此限制
         -->
		<web-view src="http://192.168.1.126:5500/index.html?token=123" @load="handleLoad" @error="handleError" @message="handleMessage"></web-view>
	</view>
</template>

<script>
	export default{ 
		onLoad(){
			// #ifdef H5
			    window.addEventListener("message", function(e){
			    	console.log("监听成功", e.data)
			    }, false);
			// #endif
		},
		methods: {
			handleLoad(e){
				// 无法被调起
				console.log("页面加载成功：", e)
			},
			handleError(e){
				// 无法被调起
				console.log("页面加载失败：", e)
			},
			handleMessage(e){
				// h5、App真机运行可行，因小程序平台需要配置白名单，所以没有实现
				console.log("接收到消息1：",e)
				// uni.navigateTo({
				// 	url:"/pagesPublic/wait/wait"
				// })
				
				uni.showModal({
					title:"温馨提示1",
					content: JSON.stringify(e)
				})
			},
		}
	}
</script>