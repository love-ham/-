<template>
	<view class="content">
		<scroll-view @scrolltolower="lower" class="scroll-restaurants-list" scroll-y="true" style="height:100%">
			<swiper class="categoryList padding-top-xs bg-white" indicator-dots="true"
				indicator-color="rgba(228,228,228,1)" indicator-active-color="#FECA49">
				<swiper-item>
					<block use-slot v-for="(item, index) in categoryList" :key="index">
						<view class="category-info">
							<navigator :url="item.url" @tap="handleTap(item.url)">
								<image :src="item.src" class="category-image"></image>
								<view class="category-text">{{item.name}}</view>
							</navigator>
						</view>
					</block>
				</swiper-item>
			</swiper>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [{
						"src": "../../static/index/index_repair.png",
						"name": "维修工单",
						"url": "/pages/repair/repair"
					},
					{
						"src": "../../static/index/index_inspection.png",
						"name": "巡检打卡",
						"url": "/pages/inspection/inspection"
					}
				],
			}
		},
		// {{TODO}}
		onLoad() {

		},
		methods: {
			handleTap(_urlInfo) {
				uni.navigateTo({
					url: _urlInfo
				})
			}
		}
	}
</script>

<style>
	@import "./index.css";

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
