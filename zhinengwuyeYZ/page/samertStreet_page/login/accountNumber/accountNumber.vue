<template>
	<!-- 用户名密码登录页面 -->
	<view class="user-name-login">
		<view class="icon">
			<image class="icon-img" src="../../../static/image/index/wxdb@2x.png" mode=""></image>
		</view>
		<view class="form">
			<van-cell-group>
			  <van-field
			  	label="账号"
			  	:value="userName"
			  	placeholder="请输入用户名"
			  	@change="onChangeUsername"
			  />
			  <van-field
			  	label="密码"
			  	:value="pwd"
			  	placeholder="请输入密码"
				type="password"
			  	@change="onChangePwd"
			  />
			</van-cell-group>
		</view>
		<view class="login-btn">
			<van-button type="primary" @click="login" :disabled="!(userName&&pwd)" block>登录</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				userName: '',  //用户名
				pwd: '',   // 密码
				isdisabled: true,   // 登录按钮状态
			}
		},
		methods: {
			login() {
				if(this.userName && this.pwd) {
					uni.switchTab({
						url: '../../../pages/my/my'
					});
				}
			},
			onChangeUsername(e) {

				this.userName = e.detail
			},
			onChangePwd(e) {
				this.pwd = e.detail
			}
		}
	}
</script>

<style lang="less">
	.user-name-login {	
		padding: 15px;
		.icon {
			position: relative;
			height: 80px;
			line-height: 80px;
			.icon-img {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 50%;
				transform: translate(-50%, 20px);
				border-radius: 5px;
				background-color: red;
			}
		}
		.form {
			margin-bottom: 15px;
			
		}
		.login-btn {

		}
	}
</style>
