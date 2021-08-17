<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(options) {
			this.storeId = options.storeId;
			this.repairId = options.repairId;
			console.log('options', options);
			this.srcPath = this.java110Constant.url.hcBaseUrl;
			this._queryRepairDetail();
			//加载报修类型
			this._loadRepairStaffs();
		},
		methods: {

		}
	}
</script>

<style>

</style>
