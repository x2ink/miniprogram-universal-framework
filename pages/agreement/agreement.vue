<template>
	<view>
		<navbar background="#222224" type="back" navTitle="协议与说明"></navbar>
		<view style="padding: 40rpx 32rpx;">
			<view class="item">
				用户服务协议
			</view>
			<view class="item">
				用户保护协议
			</view>
			<view class="item">
				付费服务协议
			</view>
		</view>
	</view>
</template>

<script setup>

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
</style>