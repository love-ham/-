<template>
	<view class="content">
		<view class="equipment-msg">
			<view class="msg">
				设备信息
			</view>
			<van-cell-group>
				<van-field
					label="位置"
					:value="location"
					placeholder="请输入设备位置"
					input-align="right"
					border="false"
					@blur="onChangeLocation"
				/>
			</van-cell-group>
		</view>
		<view class="baoxiu-msg">
			<view class="msg">报修信息</view>
			<van-cell title="报修类型" value="设备"/>
			<van-field
				label="报修人"
				:value="repairman"
				placeholder="请输入报修人"
				input-align="right"
				@blur="onChangeRepairman"
			/>
			<van-field
				label="手机号"
				type="number"
				:value="tel"
				placeholder="请输入手机号"
				input-align="right"
				@blur="onChangeTel"
			/>
			<van-field
				class="remarks"
				type="textarea"
				:value="remarks"
				placeholder="请输入报修内容"
				autosize
				@blur="onChangeRemarks"
			/>
		</view>
		<view class="photograph">
			<view class="msg"> 拍照 </view>
			<view class="photograph-content" >
				<view  @click="photograph">
					<image class="img" src="../static/paizhao.png" mode=""></image>
				</view>
				<!-- <van-icon name="photograph" /> -->
			</view>
		</view>
		<view class="submit">
			<van-button block type="info" round @click="submit" >提交</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: '',  // 设备位置
				repairman: '', //报修人
				tel: '',  // 手机号
				remarks: '', // 报修内容 
			}
		},
		onLoad() {
	
		},
		methods: {
			photograph() {
				uni.chooseImage({
				  	count: 1,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['camera'], //这要注意，camera掉拍照，album是打开手机相册
				    success: (res)=> {
						console.log(res);
						const tempFilePaths = res.tempFilePaths;
						
						uni.uploadFile({
							url: 'https://xxxx/api/v1/qiniu/upload/img', //服务器地址
							fileType:"image",//ZFB必填,不然报错
							filePath: tempFilePaths[0],//这个就是我们上面拍照返回或者先中照片返回的数组
							name: 'imgFile',
							success: (uploadFileRes) => {
								let imgData = JSON.parse(uploadFileRes.data)
								console.log(imgData.data.imgUrl);
								console.log(this);
								this.imgDataUrl = imgData.data.imgUrl
							}
						});
				    }
				});
				
			},
			submit() {
				let params = {
					location: this.location,
					repairman: this.repairman,
					tel: this.tel,
					remarks: this.remarks
				}
				console.log("params=", params)
			},
			onChangeLocation(e) {
				console.log('e=',e)
				this.location = e.detail.value
			},
			onChangeRepairman(e) {
				this.repairman = e.detail.value
			},
			onChangeTel(e) {
				this.tel = e.detail.value
			},
			onChangeRemarks(e) {
				this.remarks = e.detail.value
			}
		
		}
	}
</script>

<style lang="less">
	.content {
		width: 100%;
		background-color: #F8F8F8;
		.equipment-msg {
			width: 100%;
			.msg {
				padding: 30rpx;
				color: #999999;
				font-size: 12px;
			}
		}
		.baoxiu-msg {
			width: 100%;
			.msg {
				padding: 30rpx;
				color: #999999;
				font-size: 12px;
			}
			.remarks {
				height: 168px;
			}
		};
		.photograph {
			width: 100%;
			.msg {
				padding: 30rpx;
				color: #999999;
				font-size: 12px;
			}
			.photograph-content {
				background-color: #FFFFFF;
				.img {
					width: 214rpx;
					height: 100px;
					
				}
			}
		}
		.submit {
			margin: 30rpx;
			margin-top: 64rpx;
		}
	}
</style>
