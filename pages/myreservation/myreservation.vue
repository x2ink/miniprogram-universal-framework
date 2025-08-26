<template>
	<view>
		<navbar background="#222224" type="back" navTitle="我的预约"></navbar>
		<view style="padding: 24rpx 32rpx;">
			<wd-tabs inactiveColor="#969499" color="#fff" lineHeight="4rpx" lineWidth="50%" v-model="current">
				<block v-for="item in tabs" :key="item">
					<wd-tab :title="item">
						<!-- reserved -->
						<view class="list">
							<view class="item">
								<view class="head">
									<text>照片打印 - 2张</text>
									<text>未打印</text>
								</view>
								<view class="hr">

								</view>
								<view class="code">取件码：132533</view>
								<view class="printspot">
									<text>打印点：扫码处取照片</text>
									<image src="/static/logo.png" mode="aspectFit" class="map"></image>
								</view>
								<view class="order">
									创建时间：2025/08/19 14:39:35
								</view>
								<view class="order">
									订单编号：NO20250819143935370356
								</view>
							</view>
						</view>
						<!-- completed -->
						<view class="list">
							<view class="item">
								<view class="head">
									<text>照片打印 - 2张</text>
									<text style="color: #FFFFFF;">已完成</text>
								</view>
								<view class="hr">

								</view>
								<view style="color: #FFFFFF;" class="code">取件码：132533</view>
								<view class="printspot">
									<text>打印点：扫码处取照片</text>
									<image src="/static/logo.png" mode="aspectFit" class="map"></image>
								</view>
								<view class="order">
									创建时间：2025/08/19 14:39:35
								</view>
								<view class="order">
									订单编号：NO20250819143935370356
								</view>
							</view>
						</view>
					</wd-tab>
				</block>
			</wd-tabs>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const current = ref(0)
	const tabs = ["已预约", "已完成"]
</script>

<style scoped lang="scss">
	.list {
		margin-top: 40rpx;
		gap: 20rpx;
		display: flex;
		flex-direction: column;
	}

	:deep(.wd-tabs__nav-item-text) {
		font-size: 28rpx !important;
	}

	:deep(.wd-tabs) {
		background-color: transparent !important;
	}

	:deep(.wd-tabs__nav) {
		background-color: transparent !important;
	}

	:deep(.wd-tabs__line) {
		background: #FFFFFF !important;
	}

	.item {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 24rpx;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 24rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.12);



		.hr {
			height: 2rpx;
			margin-top: 22rpx;
			border: 2rpx solid #3A393B;
		}

		.code {
			font-weight: 500;
			font-size: 28rpx;
			color: #FEBA29;
			margin-top: 24rpx;
		}

		.order {
			margin-top: 8rpx;
			font-size: 24rpx;
			color: rgba(240, 240, 240, 0.53);
		}

		.printspot {
			font-size: 24rpx;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 8rpx;

			.map {
				width: 27rpx;
				height: 26rpx;
			}
		}

		.head {
			display: flex;
			align-items: center;
			justify-content: space-between;

			text {
				&:nth-of-type(1) {
					font-weight: 500;
					font-size: 32rpx;
					color: #FFFFFF
				}

				&:nth-of-type(2) {
					font-size: 24rpx;
					color: #FEBA29;
				}

			}
		}
	}
</style>