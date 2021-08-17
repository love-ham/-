<template>
	<view class="content">
		<view class="item">
			<image class="logo" src="/static/logo.png"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
        display: flex;
	}		
		
	.item{
		flex: 1;
		display: flex;
	}
		
	.logo{
		width: 160rpx;
		height: 120rpx;
		margin: auto;
		justify-content: center;
		align-items: center;
	}
	

</style>
