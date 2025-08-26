<template>
	<view>
		<navbar background="#222224" type="back" navTitle="确认订单"></navbar>
		<view style="padding: 40rpx 32rpx;">
			<view class="scancode">
				<view>
					扫码处取照片
				</view>
				<view>
					三星堆馆内扶手电梯
				</view>
			</view>
			<view class="sendway">
				<view>
					发货方式
				</view>
				<view>
					打印店自提
				</view>
			</view>
			<view class="photos">
				<view class="head">
					<text>打印照片</text>
					<text>共两张</text>
				</view>
				<view class="imgs">
					<view>
						<image src="/static/logo.png" mode="aspectFill"></image>
					</view>
					<view>
						<image src="/static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<!-- pay -->
			<view class="pay-bottom">
				<view class="pay">
					<view>
						<text>合集：</text>
						<view>¥20</view>
					</view>
					<button class="_GCENTER">去计算</button>
				</view>
				<safeAreaBottom></safeAreaBottom>
			</view>

		</view>
	</view>
</template>

<script setup>
	import safeAreaBottom from "@/components/safeAreaBottom/safeAreaBottom.vue"
</script>

<style lang="scss" scoped>
	.pay-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: #222224;
		padding: 32rpx 32rpx 12rpx 32rpx;

		.pay {
			display: flex;
			align-items: center;
			justify-content: space-between;

			>view {
				display: flex;
				align-items: center;

				text {
					font-size: 24rpx;
					color: #FFFFFF;
				}

				view {
					font-weight: 600;
					font-size: 40rpx;
					color: #FEBA29;
				}
			}

			button {
				width: 302rpx;
				height: 92rpx;
				background: linear-gradient(90deg, #FEBA29 0%, #FF8F97 100%);
				border-radius: 46rpx;
				font-weight: 500;
				font-size: 32rpx;
				color: #FFFFFF;
			}
		}
	}

	.scancode {
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);
		padding: 30rpx 24rpx;

		view {
			&:nth-of-type(1) {
				font-weight: 500;
				font-size: 32rpx;
				color: #FFFFFF;
			}

			&:nth-of-type(2) {
				margin-top: 8rpx;
				font-size: 24rpx;
				color: rgba(240, 240, 240, 0.53);
			}
		}
	}

	.photos {
		padding: 24rpx;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);
		font-size: 28rpx;
		margin-top: 24rpx;

		.head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #FFFFFF;
		}

		.imgs {
			margin-top: 24rpx;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20rpx;

			>view {
				aspect-ratio: 309/411;
				border-radius: 31rpx;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

		}
	}

	.sendway {
		padding: 32rpx;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 24rpx;

		view {
			&:nth-of-type(1) {
				font-size: 28rpx;
				color: #FFFFFF;
			}

			&:nth-of-type(2) {
				border-radius: 16rpx;
				border: 2rpx solid #FEBA29;
				padding: 8rpx 16rpx;
				font-size: 28rpx;
				color: #FEBA29;
			}
		}
	}
</style>