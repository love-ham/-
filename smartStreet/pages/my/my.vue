<template>
	<view class="my-content">
		<view class="header">
			<view class="user-info" @click="showloginPopup">
				<image class="header-img" :src="avatarUrl" mode=""></image>
				<view class="user-name">{{nickName}}</view>
			</view>
			<view class="detail" v-show="detail">详情
				<image class="detail-img" src="../../static/image/index/right@2x.png" mode=""></image>
			</view>
		</view>
		<van-popup :show="showPopup" position="bottom" custom-style="height: 40%;" @close="onClose">
			<!-- 选择登录方式 - 账号登录、微信登录 -->
			<view class="login-type" v-if="!isEmpower">
				<view class="title">{{loginTypeTitle}}</view>
				<view class="login-type-list">
					<van-cell  class="one" @click="chose('num')">
					  <view slot="title" >
					    <image class="account-number-img"  src="../../static/image/index/通讯录@2x.png" mode=""></image>
					    <view class="van-cell-text">{{loginType.accountNumber}}</view>
					  </view>
					  <view v-show="checkSign" slot="right-icon" class="right-icon">
					  	<van-icon name="success" />
					  </view>
					</van-cell>
					<van-cell class="one two" @click="chose('wx')">
					  <view slot="title">
					    <image class="account-number-img"  src="../../static/image/index/通讯录@2x.png" mode=""></image>
					    <view class="van-cell-text">{{loginType.wx}}</view>
					  </view>
					  <view v-show="!checkSign" slot="right-icon" class="right-icon">
					  	<van-icon name="success" />
					  </view>
					</van-cell>
				</view>
				<van-button class="confirm" size="small" @click="confirm(type)" type="primary">确定</van-button>
			</view>
			<!-- 选择微信登录方式后的授权弹框 -->
			<view class="wx-login" v-else="isEmpower">
				<text class="title">微信公开信息授权</text>
				<view class="userInfo">
					<text class="userInfo-text-one">申请获取您的公开信息</text>
					 <text class="userInfo-text-two">昵称、头像</text>
				</view>
				<view class="btn">
					<view class="no-btn">
						<van-button class="refuse" size="small" @click="refuse" type="default">拒绝</van-button>
					</view>
					<view class="yes-btn">
						<van-button class="allow"  withCredentials="true" lang="zh_CN" :disabled="allowDisabled" @click="allow" size="small"  type="primary">允许</van-button>
					</view>
				</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: false,  // 详情文字及图标展示
				showPopup: false,  // 登录选择弹出层
				loginTypeTitle: '您正在登录通州社区',
				flag: '√',
				loginType: {
					accountNumber: '通州社区账号登录',
					wx: '微信账号授权登录'
				},
				type:'',  // 登录方式
				checkSign: true,  // 选择登录方式时右侧对号标识
				isEmpower: false,  // 登录方式选择弹框和微信授权弹框切换符
				allowDisabled: false,   // 微信授权登录允许按钮禁用
				nickName: '点击登录',
				avatarUrl: '../../static/image/index/我的未选中@2x.png',
				isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
			}
		},
		onLoad() {//默认加载
			// this.login();
		},
		methods: {
			// 点击登录
			showloginPopup() {
				this.showPopup = true;
				// uni.navigateTo({
				//     url: '../../page/login/accountNumber/accountNumber' // 账号登录
				// });
			},
			 
			// 选择微信登录时拒绝按钮
			refuse() {
				this.showPopup = false
				console.log('1111111111')
				uni.switchTab({
					url: '../index/index'
				});
			},
			
			// 允许
			 allow() {
				let _this = this;
				uni.getUserProfile({
					desc: 'weixin',
					success: function(infoRes) {
						console.log('infoRes==',infoRes)
						_this.showPopup = false
						_this.nickName = infoRes.userInfo.nickName; //昵称
						_this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							// _this.updateUserInfo();
						} catch (e) {}
					},
					fail(res) {}
				});
			},
			
			//登录
			login() {
				let _this = this;
				// uni.showLoading({
				// 	title: '登录中...'
				// });
		 
			   // 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log('loginRes==',loginRes)
						let code = loginRes.code;
						if (!_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									console.log('infoRes====',infoRes)
									console.log('222')
									_this.showPopup = false
	　　　　　　　　　　　　　　　　　　//获取用户信息后向调用信息更新方法
									_this.nickName = infoRes.userInfo.nickName; //昵称
									_this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
									// _this.updateUserInfo();//调用更新信息方法
								}
							});
						}
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						// uni.request({
						// 	url: '服务器地址',
						// 	data: {
						// 		code: code,
						// 	},
						// 	method: 'GET',
						// 	header: {
						// 		'content-type': 'application/json'
						// 	},
						// 	success: (res) => {
						// 		//openId、或SessionKdy存储//隐藏loading
						// 		uni.hideLoading();
						// 	}
						// });
					},
				});
			},
			
			//向后台更新信息
		// 	updateUserInfo() {
		// 		let _this = this;
		// 		uni.request({
		// 			url:'url' ,//服务器端地址
		// 			data: {
		// 				appKey: this.$store.state.appKey,
		// 				customerId: _this.customerId,
		// 				nickName: _this.nickName,
		// 				headUrl: _this.avatarUrl
		// 			},
		// 			method: 'POST',
		// 			header: {
		// 				'content-type': 'application/json'
		// 			},
		// 			success: (res) => {
		// 				if (res.data.state == "success") {
		// 					uni.reLaunch({//信息更新成功后跳转到小程序首页
		// 						url: '/pages/index/index'
		// 					});
		// 				}
		// 			}
		// 		});
		// 	}
		// },
		
			
			
			
			
			
			
			// 确定
			confirm(type) {
				console.log(type)
				if(type) {
					if(type === 'num') {
						this.showPopup = false
						uni.navigateTo({
						    url: '../../page/login/accountNumber/accountNumber'
						});
					}else if(type === 'wx')	 {
						this.isEmpower = true;
					}
				}
			},
			// 选择登录方式
			chose(type) {
				if(type === 'num') {
					this.type = 'num'
					this.checkSign = true
				}else if(type === 'wx') {
					this.type = 'wx'
					this.checkSign = false
				}
			},
			
			// 关闭弹出层
			onClose() {
				this.showPopup = false
			},
		}
	}
</script>

<style lang="less">
	.my-content {
		// height: 500px;
		background-color: #F8F8F8;
		.header {
			position: relative;
			padding: 20rpx;
			height: 45px;
			line-height: 45px;
			background-color: #FFFFFF;
			
			.header-img {
				position: absolute;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: red;
			}
			.user-name {
				position: absolute;
				left: 140rpx;
			}
			.detail {
				position: absolute;
				right: 20rpx;
				font-size: 13px;
				color: #999;
				.detail-img {
					width: 12px;
					height: 12px;
					margin-left: 15rpx;	
				}
			}
		}
		.login-type {
			.title {
				
			}
			.login-type-list {
				.one {
					// position: relative;

					.account-number-img {
						// position: absolute;
						display: inline-block;
						width: 20px;
						height: 20px;
						border-radius: 50%;
						vertical-align: middle;
					}
					.van-cell-text {
						// position: absolute;
						display: inline-block;
						font-size: 14px;
						left: 90rpx;
						vertical-align: middle;
						margin-left: 10rpx;
					}

				}
				.two {
					// top: 14px;
				}
			}
			.confirm {
				position: absolute;
				left: 50%;
				transform: translate(-50%, 30px);
			}
		}
		.wx-login {
			padding-left: 10rpx;
			padding-right: 10rpx;
			.title {
				height: 40px;
				line-height: 40px;
				font-size: 13px;
				display: block;
				border-bottom: 1rpx solid #ccc;
			}
			.userInfo {
				position: relative;
				top: 50px;
				font-size: 12px;
				.userInfo-text-one {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
				.userInfo-text-two {
					position: absolute;
					font-size: 13px;
					font-weight: 500;
					left: 50%;
					transform: translate(-50%, 20px);
				}
			}
			.btn {
				position: relative;
				.no-btn {
					position: absolute;
					top: 110px;
					left: 178rpx;
					
				}
				.yes-btn {
					position: absolute;
					top: 110px;
					left: 407rpx;
				
				}
			}
		}
	}
</style>
