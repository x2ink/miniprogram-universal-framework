<template>
	<view>
		<navbar background="#222224" type="back" navTitle="消费记录"></navbar>
		<view style="padding: 40rpx 32rpx;">
			<view class="item">
				<view class="head">
					<text>AI真人换脸</text>
					<text>
						交易成功
					</text>
				</view>
				<text class="order">订单ID：567657986545235</text>
				<text class="order">购买时间：2023-10-17 14:51</text>
				<view class="price">¥9.9</view>
			</view>

		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 24rpx;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);
		margin-bottom: 24rpx;

		.price {
			font-weight: 500;
			font-size: 32rpx;
			color: #FFFFFF;
			position: absolute;
			right: 24rpx;
			bottom: 32rpx;
		}

		.order {
			margin-top: 12rpx;
			font-size: 24rpx;
			color: rgba(240, 240, 240, 0.53);
		}

		.head {
			display: flex;
			align-items: center;
			justify-content: space-between;


			text {
				&:nth-of-type(1) {
					font-weight: 500;
					font-size: 32rpx;
					color: #FFFFFF;
				}

				&:nth-of-type(2) {
					font-size: 24rpx;
					color: #7BE86F;
				}
			}
		}
	}
</style>