<template>
	<view>
		<view class="lauwen-select">
			<view class="lauwen-select-box">
				<view :style="{padding: padding+'rpx', fontSize:fontSize}" class="lauwen-select-input" @tap="lauwenSelect()">
					<view class="lauwen-select-input-text" :style="{height: height+'rpx', lineHeight: height+'rpx'}" :data-index="selected_index">{{ options[selected_index] || "请选择" }}</view>
					<view class="lauwen-select-input-icon" :class="is_selecting ? 'lauwen-selecting-icon' : ''">
						<view class="lauwen-icon"></view>
					</view>
				</view>
			</view>
			
			<view class="lauwen-options" v-show="is_selecting">
				<view v-for="(item, index) in options" 
				class="lauwen-option" 
				:class="selected_index == index ? 'lauwen-option-active' : ''"
				:key="index" 
				@tap="lauwenSelected(index)"
				:style="{height: (height + padding*2)+'rpx', lineHeight: height+'rpx', padding: padding+'rpx', fontSize:fontSize}">{{ item }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "lauwenSelect",
		props: {
			defaultIndex: {
				default: ""
			},
			options: {
				type: Object,
				default: {},
			},
			height: {
				type: Number,
				default: 45
			},
			padding: {
				type: Number,
				default: 15
			},
			fontSize: {
				type: String,
				default: "1rem"
			},
		},
		data() {
			return {
				is_selecting: false,
				selected_index: this.defaultIndex
			}
		},
		methods: {
			lauwenSelect() {
				let _this = this
				_this.is_selecting = !_this.is_selecting
			},
			lauwenSelected(index) {
				let _this = this
				
				if (_this.selected_index === index) {
					_this.selected_index = ""
				}else{
					_this.selected_index = index
					_this.$emit("getValue", index)
				}
				
				_this.is_selecting = false
			},
		},
	}
</script>

<style scoped>
	.lauwen-select{
		position: relative;
	}
	.lauwen-select-box {
		width: 100%;
	}
	.lauwen-select-input {
		width: 100%;
		border: 1px solid #515a6e;
		border-radius: 10rpx;
		box-sizing: border-box;
		display: flex;
	}
	.lauwen-select-input-text {
		width: 80%;
		flex-grow: 1;
	}

	.lauwen-select-input-icon {
		width: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.lauwen-icon {
		content: " ";
		display: inline-block;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		height: 20rpx;
		width: 20rpx;
		border-width: 3rpx 3rpx 0 0;
		border-color: #333;
		border-style: solid;
	}
	.lauwen-selecting-icon {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
	}
	.lauwen-options {
		width: 100%;
		position: absolute;
		top: 77rpx;
		border: 1px solid #c5c8ce;
		box-sizing: border-box;
		background-color: #fff;
	}
	.lauwen-option {
		width: 100%;
		box-sizing: border-box;
	}
	.lauwen-option-active {
		font-weight: 600;
		background-color: #007bff;
		color: #fff;
	}
</style>
