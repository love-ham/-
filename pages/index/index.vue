<template>
	<view class="content">			
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" bind:indicator-dots="indicatorDots" bind:autoplay="autoplay" bind:interval="interval" bind:duration="duration">
						<swiper-item>
							<image class="swiper-img" src= "../../static/image/index/header.png" mode=""></image>
							<view class="swiper-title">
								掌上物业
							</view>
							<view class="swiper-text-one">
								物业管理更便捷
							</view>
							<view class="swiper-text-two">
								智能物业管理平台，助力物业转型升级
							</view>
						</swiper-item>
						<swiper-item>
							<image class="swiper-img" src="../../static/image/index/header.png" mode=""></image>
						</swiper-item>
						<swiper-item>
							<image class="swiper-img" src="../../static/image/index/header.png" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="model-list">
			<van-grid square column-num="4" gutter="10" border="false">
			  <van-grid-item   use-slot v-for="(item,index) in modelList" :key="index" @click="toDetail(item.url)">
				  <image class="grid-img" :src="item.img"/>
				  <p class="grid-text"> {{item.text}} </p>
			  </van-grid-item>
			</van-grid>
		</view>
		<view class="notice">
			<view class="title">
				<view class="title-text">
					小区公告
				</view>
				<view class="title-icon">
					<image src="../../static/image/index/right@2x.png" mode=""></image>
				</view>
			</view>
			<view class="list">
				<uni-list v-for="(item,index) in noticeList">
				    <uni-list-item  :title="item.title" :note="item.note" :rightText="item.time" :key="index" :border="false" ellipsis="1" ></uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 3,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				// 功能模块列表
				modelList: [
					{
						text: '设备维修',
						img: "../../static/image/index/wxdb@2x.png",
						url: '../../page/equipmentInspection/equipmentInspection/equipmentRepairService'
					},
					{
						text: '文字2',
						img: "../../static/image/index/wxdb@2x.png",
					},
					{
						text: '文字3',
						img: "../../static/image/index/wxdb@2x.png",
					},
					{
						text: '文字4',
						img: "../../static/image/index/wxdb@2x.png",
					},
					{
						text: '文字5',
						img: "../../static/image/index/wxdb@2x.png",
					},
					{
						text: '文字6',
						img: "../../static/image/index/wxdb@2x.png",
					},
					{
						text: '文字7',
						img: "../../static/image/index/wxdb@2x.png",
					},
				],
				//  小区公告列表
				noticeList: [
					{
						title: '关于通州智慧社区项目需求方案研讨',
						time: '2020-08-03',
						note: '这次需求内容很多，开发周期也需要足够的时间才可以交出更好的成果'
					},
					{
						title: '关于通州智慧社区项目需求方案研讨',
						time: '2020-08-03',
						note: '这次需求内容很多，开发周期也需要足够的时间才可以交出更好的成果'
					},
					{
						title: '关于通州智慧社区项目需求方案研讨',
						time: '2020-08-03',
						note: '这次需求内容很多，开发周期也需要足够的时间才可以交出更好的成果'
					},
					{
						title: '关于通州智慧社区项目需求方案研讨',
						time: '2020-08-03',
						note: '这次需求内容很多，开发周期也需要足够的时间才可以交出更好的成果'
					},
					{
						title: '关于通州智慧社区项目需求方案研讨',
						time: '2020-08-03',
						note: '这次需求内容很多，开发周期也需要足够的时间才可以交出更好的成果'
					},
				]
				
			}
		},
		onLoad() {

		},
		methods: {
			toDetail(url) {
				console.log('111111111', url)
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>

<style lang="less">
	.content {
		background-color: #F8F8F8;
        // display: flex;
		.uni-padding-wrap {
			width: 100%;
			.swiper-img {
				width: 100%;
				height: 100%;
			}
			.swiper-title {
				position: absolute;
				top: 30px;
				left: 50%;
				transform: translateX(-50%);
				font-size: 20px;
				color: #fff;
			}
			.swiper-text-one {
				position: absolute;
				top: 88px;
				left: 35px;
				font-size: 18px;
				color: #fff;
			}
			.swiper-text-two {
				position: absolute;
				top: 118PX;
				left: 35px;
				font-size: 11px;
				color: #F1F1F1;
			}
		}
		.model-list {
			margin-top: 15px;
			margin-bottom: 30px;
			.grid-img {
				width: 40rpx;
				height: 20px;
			}
			.grid-text {
				font-size: 11px;
				margin-top: 10px;
			}
		}
		.notice {
			.title {
				height: 13px;
				position: relative;
				font-size: 15px;
				color: #005CC5;
				.title-text {
					position: absolute;
					left: 50rpx;
					
				}
				.title-icon {
					position: absolute;
					right: 40rpx;;
					image {
						width: 10px;
						height: 10px;
						
					}
				}
			}
			.list {
				margin-top: 15px;
				padding-left: 20rpx;
				padding-right: 20rpx;
			}
		}
	}		
	// .content .item{
 //        flex: 1;
	// }

</style>
