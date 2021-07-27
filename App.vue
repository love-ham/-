<script>
	export default {
		onLaunch: function() { //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
			console.log('App Launch')
		},
		onShow: function() {//onShow: 页面显示页面载入后触发onShow方法，显示页面。
			console.log('App Show')
		},
		onHide: function() { //onHide: 页面隐藏 当navigateTo、底部tab切换、上传文件选择图片时调用。
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
