<template>
	<view class="content">
		<view class="tab">
			<van-tabs   @change="onChange">
			  <van-tab 
			  v-for="(item,index) in tabBarList" 
			  :title="item" 
			  :key="index">
			  <view class="content-list">
			  	<van-cell
				class="title-class"
				v-for="(item,i) in contentList" 
				:key="i"
				center 
				:title="item.title"  
				:label="item.label" 
				is-link
				 />
			  </view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: '',
				tabBarList: ["全部", "未开始", "进行中", "已结束"],
				contentList: [
					{
						title: '信息1fdsgfdsfgdshhdk房东说不方便的市场部',
						label: '2021-09-18 15:30 - 2021-09-18 15:30'
					},
					{
						title: '信息1',
						label: '描述1'
					},
					{
						title: '信息1',
						label: '描述1'
					},
					{
						title: '信息1',
						label: '描述1'
					},
				]
			}
		},
		methods: {
			onChange(e) {
				let active = e.detail.index;
				if(active == '0') {
					console.log('全部');
					this.status = '0';
				}else if(active == '1') {
					console.log('未开始');
					this.status = '1';
				}else if(active == '2') {
					console.log('进行中');
					this.status = '2';
				}else if(active == '3') {
					console.log('已结束');
					this.status = '3';
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		.tab {
			.content-list {
				.title-class {
					
					
				}
			}
		}
	}
</style>
