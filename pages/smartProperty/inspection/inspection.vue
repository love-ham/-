<template>
	<view>
		<view class="block__title">巡检任务</view>
		<view v-for="(item,index) in tasks" :key="index"
			class="bg-white margin-bottom margin-right-xs radius margin-left-xs padding-top padding-left padding-right">
			<view class="flex padding-bottom-xs solid-bottom justify-between">
				<view>{{item.taskId}}</view>
				<view class="text-gray">{{item.stateName}}</view>
			</view>
			<view class="flex margin-top justify-between">
				<view class="text-gray">巡检计划</view>
				<view class="text-gray">{{item.inspectionPlanName}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<view class="text-gray">计划编码</view>
				<view class="text-gray">{{item.inspectionPlanId}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<view class="text-gray">巡检人</view>
				<view class="text-gray">{{item.planUserName}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<view class="text-gray">巡检时间</view>
				<view class="text-gray">{{item.planInsTime }}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<view class="text-gray">巡检方式</view>
				<view class="text-gray">{{item.signTypeName}}</view>
			</view>
			<view class="solid-top flex justify-end margin-top padding-top-sm padding-bottom-sm">
				<button v-if="item.status" class="cu-btn sm bg-green margin-left" @click="_startInspection(item)">我要巡检</button>
				<button v-else class="cu-btn sm bg-yellow margin-left">巡检完成</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tasks: [{
					"taskId": "10001",
					"stateName": "巡检名称",
					"inspectionPlanName": "xxxx",
					"inspectionPlanId": "xxxid",
					"planUserName": "用户",
					"planInsTime": "2021-8-17",
					"signTypeName": "type",
					"status":false,//表示无法巡检
				}, 
				{
					"taskId": "10002",
					"stateName": "巡检名称2",
					"inspectionPlanName": "xxxx2",
					"inspectionPlanId": "xxxid2",
					"planUserName": "用户2",
					"planInsTime": "2021-8-17",
					"signTypeName": "type2",
					"status":true,//表示可以巡检
				}, ], 
			}
		},
		// {{TODO 根据用户id获取巡检任务列表}}
		onLoad() {

		},
		methods: {
			_startInspection(_item) {
				// {{TODO 鉴权}}
				uni.navigateTo({
					url: '/pages/excuteInspection/excuteInspection?taskId=' + _item.taskId,
				});
			},
		}
	}
</script>

<style>
	.solid-bottom::after {
		border-bottom: 2upx solid rgba(0, 0, 0, 0.1);
	}


	.solid-top::after {
		border-top: 2upx solid rgba(0, 0, 0, 0.1);
	}

	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}
</style>
