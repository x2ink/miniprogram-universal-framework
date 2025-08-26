<template>
	<view>
		<navbar background="#222224" type="back" navTitle="设置"></navbar>
		<view style="padding: 40rpx 32rpx;">
			<view class="item">
				消费记录
			</view>
			<button class="item" open-type="contact">联系客服</button>
			<view class="item">
				协议宇与说明
			</view>
			<view class="item" style="margin-top: 24rpx;color: #E85151;">
				退出账号
			</view>
		</view>
		<view class="logo">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<text>
				三星堆影像馆
			</text>
			<text>
				V2.1
			</text>
			<safeAreaBottom></safeAreaBottom>
		</view>
	</view>
</template>

<script setup>
	import safeAreaBottom from "@/components/safeAreaBottom/safeAreaBottom.vue"
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		height: 104rpx;
		align-items: center;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);
		padding: 0 24rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		margin-bottom: 24rpx;
	}

	.logo {
		position: absolute;
		left: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: translateX(-50%);
		bottom: 0;
		gap: 20rpx;
		flex-direction: column;

		text {
			&:nth-of-type(1) {
				font-size: 28rpx;
				color: #FFFFFF;
			}

			&:nth-of-type(2) {
				font-size: 24rpx;
				color: #969499;
			}
		}

		image {
			width: 136rpx;
			border-radius: 50%;
			height: 136rpx;
			background: #D8D8D8;
			border: 2rpx solid #979797;
		}
	}
</style>