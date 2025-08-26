<template>
	<wd-popup v-model="show" custom-class="login-popop" position="bottom">
		<view style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
			<image src="/static/logo.png" mode="aspectFit" class="avatar"></image>
			<view class="appname">三星堆影像馆</view>
		</view>
		<view class="agreement">
			<radio color="#FF8F97" value="r1" :checked="true" />
			<view>
				请阅读<text>《用户服务协议》</text>和<text>《隐私保护协议》</text>。阅读后请您勾选左侧按钮，并点击 “同意并登录”，即表示您已阅读并同意上述条款。
			</view>
		</view>
		<button class="login _GCENTER _PCENTERX">同意并登录</button>
		<view class="nologin">暂不登录</view>
		<safeAreaBottom></safeAreaBottom>
	</wd-popup>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const show = ref(false)
	import safeAreaBottom from "@/components/safeAreaBottom/safeAreaBottom.vue"
	defineOptions({
		options: {
			styleIsolation: 'shared'
		}
	})
</script>

<style lang="scss">
	.login-popop {
		background-color: #111112 !important;
		border-radius: 72rpx 72rpx 0rpx 0rpx;
		padding: 0 32rpx;

		.avatar {
			margin-top: 72rpx;
			width: 164rpx;
			height: 164rpx;
			background: #D8D8D8;
			border: 2rpx solid #979797;
			border-radius: 50%;
		}

		.appname {
			font-weight: 500;
			font-size: 36rpx;
			color: #FFFFFF;
			margin-top: 24rpx;
		}

		.agreement {
			margin-top: 64rpx;
			display: flex;
			align-items: flex-start;
			font-weight: 500;
			font-size: 24rpx;
			color: #A39F9F;
			line-height: 40rpx;
			gap: 16rpx;

			text {
				color: #FF8F97;
				text-decoration: underline;
			}
		}

		.login {
			width: 558rpx;
			height: 92rpx;
			background: linear-gradient(90deg, #FEBA29 0%, #FF8F97 100%);
			border-radius: 46rpx;
			color: #fff;
			margin-top: 48rpx;
		}

		.nologin {
			margin-top: 16rpx;
			font-size: 28rpx;
			margin-bottom: 12rpx;
			color: rgba(255, 255, 255, 0.64);
			text-align: center;
		}
	}
</style>