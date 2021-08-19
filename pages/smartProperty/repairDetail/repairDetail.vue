<template>
	<view>
		<view class="cu-list menu margin-top">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-edit text-green"></text>
					<text class="text-grey">报修ID</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairId}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-ticket text-green"></text>
					<text class="text-grey">报修类型</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairTypeName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-profile text-green"></text>
					<text class="text-grey">报修人</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-phone text-green"></text>
					<text class="text-grey">联系方式</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.tel}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-footprint text-green"></text>
					<text class="text-grey">报修位置</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairObjName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-green"></text>
					<text class="text-grey">预约时间</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.appointmentTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-green"></text>
					<text class="text-grey">状态</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.stateName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-green"></text>
					<text class="text-grey">报修内容</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.context}}</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"repairId": "",
				"repairDetailInfo": {},
			}
		},
		onLoad(options) {
			this.repairId = options.repairId;
			// {{TODO 根据id获得工单详情信息}}
			this.repairDetailInfo = {
				"repairId": '00001',
				"repairObjName": "test",
				"repairTypeName": "type",
				"repairName": "测试",
				"tel": "1xxxxxxxxxx",
				"appointmentTime": "2021-8-17",
				"stateName": "进行中",
				"context": "内容",
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
