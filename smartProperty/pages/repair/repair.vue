<template>
	<view>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="输入报修人" v-model="repairName" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-green shadow-blur round" @tap="_searchRepair()">搜索</button>
			</view>
		</view>
		<view class="margin-top">
			<view class="cu-list menu-avatar " v-for="(item,index) in repairOrders" :key="index"
				@tap="_toRepairDetail(item)">
				<view class="cu-item arrow">
					<view class="content content-left">
						<view class="text-grey">
							<text class="cuIcon-notification text-cut text-green margin-right-xs"></text>
							<text class="ellip">{{item.repairObjName}}-{{item.repairTypeName}}</text>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								报修人：{{item.repairName}}-{{item.tel}}
							</view>
						</view>
					</view>
					<view class="rob-order text-df text-white bg-green text-center" @tap.stop="_robOrder(item)">
						抢单
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{item.appointmentTime}}
							<text class="lg text-gray cuIcon-right margin-left-xs"></text>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="load-more" @click="_loadRepairOrders()">加载更多</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				repairOrders: [{
					"repairObjName": "test",
					"repairTypeName": "type",
					"repairName": "测试",
					"tel": "1xxxxxxxxxx",
					"appointmentTime": "2021-8-17",
				}, ]
			}
		},
		methods: {
			// {{TODO 工单搜索}}
			_searchRepair() {

			},
			// 跳转至工单详情
			_toRepairDetail(item) {
				uni.navigateTo({
					url: '/pages/repairDetail/repairDetail?repairId'
				})
			},
			// {{TODO 抢单功能}}
			_robOrder(item) {

			}
		}
	}
</script>

<style>
	.cu-list.menu-avatar>.cu-item .content-left {
		left: 30upx;
	}

	.cu-list+.cu-list {
		margin-top: 20upx;
	}

	/* 抢单按钮 */
	.rob-order {
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 50%;
	}

	.record-add {
		position: fixed;
		right: 10rpx;
		bottom: 50rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.record-add img {
		width: 100%;
		height: 100%;
	}

	.ellip {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-all;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		align-content: center;
		width: 400rpx;
	}
</style>
