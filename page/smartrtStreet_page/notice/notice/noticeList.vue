<template>
	<view class="notice">
		<view class="tips">
			
		</view>
		<view class="notice-list">
			<van-cell-group 
			v-for="(item,index) in noticeList" 
			>
			  <van-cell  
			  :title="item.title" 
			  is-link 
			  :label="item.time" 
			  link-type="navigateTo"
			  url="./noticeDetail"
			  > 
				<view class="notice-list-icon" slot="icon">
					<image :src="item.icon"></image>
				</view>
			  </van-cell>
			</van-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 通知/公告列表
				noticeList: [
					{
						title: '关于公告通知！',
						time: '2020-10-20',
						icon: '../../../static/image/index/index.png'
					},
					{
						title: '关于公告通知！',
						time: '2020-10-20',
						icon: '../../../static/image/index/index.png'
					},
					{
						title: '关于公告通知！',
						time: '2020-10-20',
						icon: '../../../static/image/index/index.png'
					},
					{
						title: '关于公告通知！',
						time: '2020-10-20',
						icon: '../../../static/image/index/index.png'
					},
				],
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.notice {
		.tips {
			
		}
		.notice-list {
			.notice-list-icon {
				width: 25px;
				height: 25px;
				margin-right: 10px;
				margin-top: 10px;
				image {
					width: 25px;
					height: 25px;
				}
			}
		}
	}
</style>
