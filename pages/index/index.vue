<template>
	<view class="content">
		<patrol class="item"></patrol>
		<patrol class="item"></patrol>
		<patrol class="item"></patrol>
	</view>
</template>

<script>
	import patrol from "../component/patrol.vue";
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		components:{
			patrol
		},
		methods: {

		}
	}
</script>

<style>
	.content {
        display: flex;
		margin-top: 50rpx;
	}		
	.content .item{
        flex: 1;
	}

</style>
