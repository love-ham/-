<template>
	<view class="content">
		<view class="question-module">
			<view class="title">
				您的问题或建议:
			</view>
			<view class="question-describe">
				 <textarea class="question-textarea" 
				 @blur="bindTextAreaBlur" 
				 placeholder="请输入个人意见反馈,字数在200字以内" 
				 maxlength=200 />
			</view>
		</view>
		<view class="contact-information">
			<view class="title">
				您的联系方式:
			</view>
			<view class="contact-input">
				<input class="uni-input" maxlength=11 :value="tell" @blur="onChangeBlurTell" type="number" placeholder="请输入电话号码" />
				<input class="email" type="text" :value="email" @input="onChangeBlurEmail" placeholder="请输入电子邮箱" />
			</view>
		</view>
		<view class="remarks">
			留下您的联系方式，以便我们了解问题后及时反馈结果
		</view>
		<view class="uni-padding-wrap uni-common-mt submit">
			<button type="primary" @click="submit">提交建议</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questionMessage: '',  // 问题或意见内容
				tell: '',
				email: ''
			}
		},
		methods: {
			// 问题或意见字段赋值
			bindTextAreaBlur(e) {
				this.questionMessage = e.detail.value

			},
			onChangeBlurTell(e) {

				this.tell = e.detail.value
			},
			onChangeBlurEmail(e) {

				this.email = e.detail.value
			},
			// 提交
			submit() {
				let parmas = {
					questionMessage: this.questionMessage,
					tell: this.tell,
					email: this.email
				}
				console.log("parmas:     ", parmas)
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 10px;
		// 意见或建议模块
		.question-module {
			// 标题
			.title {
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 8px;
			}
			// 文本框
			.question-describe {
				.question-textarea {
					font-size: 13px;
					height: 100px;
					background-color: #DCDEE0;
					border: 1px solid #C9C9C9;
					border-radius: 5px;
				}
			}
		}
		.contact-information {
			.title {
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 8px;
			}
			.contact-input {
				font-size: 13px;
				.uni-input {
					background-color: #F8F8F8;	
					margin-bottom: 5px;
					height: 40px;
				}
				.email {
					height: 40px;
					background-color: #F8F8F8;
				}
			}
		}
		.remarks {
			font-size: 13px;
			color: #C0C0C0;
			margin-top: 5px;
		}
		.submit {
			margin-top: 20px;
		}
	}
</style>
