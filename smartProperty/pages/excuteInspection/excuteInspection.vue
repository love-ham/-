<template>
	<view>
		<view class="block__title">{{item.inspectionName || ""}}巡检</view>
		<form>
			<view class="cu-form-group">
				<view class="title">巡检情况</view>
				<picker @change="patrolChange" :value="patrolIndex" :range="patrols">
					<view class="picker">
						{{patrolTypeName?patrolTypeName:'请选择'}}
					</view>
				</picker>
			</view>

			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" v-model="description" placeholder="请输入巡检说明"></textarea>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					巡检图片
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(img,index) in imgList" :key="index" :data-url="imgList[index]">
						<image :src='imgList[index]' mode='aspectFill'></image>
						<view class="cu-tag bg-red" @tap="removePhoto(index)" :data-index="index">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class="cuIcon-cameraadd"></text>
					</view>
				</view>
			</view>
		</form>

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-green margin-tb-sm lg" @tap="_submitExcuteInspection">提交</button>
		</view>

	</view>
</template>

<script>
	import * as ImageUtils from '../../utils/image_utils.js';
	export default {
		data() {
			return {
				taskId: "",
				item: {},
				patrols: ['正常', '异常'],
				patrolTypes: ['10001', '20002'],
				patrolTypeName: '请选择',
				description: "",
				imgList: [],
				photos: [],
			}
		},
		onLoad(options) {
			this.taskId = options.taskId;
			// {{TODO 根据id查询巡检任务属性}}
			this.item = {
				"taskId": this.taskId,
				"stateName": "巡检名称2",
				"inspectionPlanName": "xxxx2",
				"inspectionPlanId": "xxxid2",
				"planUserName": "用户2",
				"planInsTime": "2021-8-17",
				"signTypeName": "type2",
				"status": true, //表示可以巡检
				"inspectionName": "巡检名称",
			}
		},
		methods: {
			patrolChange: function(e) {
				this.patrolTypeName = this.patrols[e.detail.value];
				this.patrolType = this.patrolTypes[e.detail.value];
			},
			removePhoto: function(removeIndex) {
				let _imgList = [];
				this.imgList.forEach(function(item, index) {
					if (index != removeIndex) {
						_imgList.push(item);
					}
				});
				let _photos = [];
				this.photos.forEach(function(item, index) {
					if (index != removeIndex) {
						_photos.push(item);
					}
				});
				this.photos = _photos;
				this.imgList = _imgList;
			},
			ChooseImage: function(e) {
				let that = this;
				wx.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //手机拍照
					success: (res) => {
						let tempFilePaths = res.tempFilePaths[0];
						that.$data.imgList.push(tempFilePaths);
						//#ifdef H5
						ImageUtils.translate(tempFilePaths, (url) => {
							that.$data.photos.push(url);
						})
						//#endif
					}
				});
			},
			// {{TODO 提交巡检}}
			_submitExcuteInspection(e) {

			}
		}
	}
</script>

<style>
	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}
</style>
