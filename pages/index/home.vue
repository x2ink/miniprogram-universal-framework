<template>
	<view>
		<view class="card-swiper">
			<wd-swiper autoplay v-model:current="current" custom-indicator-class="custom-indicator-class"
				custom-image-class="custom-image" custom-next-image-class="custom-image-next"
				custom-prev-image-class="custom-image-prev" :indicator="{ type: 'dots' }" :list="swiperList"
				previousMargin="100rpx" nextMargin="100rpx"></wd-swiper>
		</view>
		<view style="padding:0 32rpx 32rpx 32rpx;">
			<view class="title">AI图片换脸</view>
			<view class="tabs">
				<view class="tab _GCENTER">
					女神
				</view>
				<view class="tab _GCENTER">
					男神
				</view>
			</view>
			<!--list of photos -->
			<view class="photos">
				<view v-for="item in 20" :key="item">
					<image src="/static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- placeholder -->
		<view style="height:132rpx ;">

		</view>
		<!-- make immediately-->
		<view class="make _GCENTER">
			<button class="_GCENTER">立即制作</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	const swiperList = ref([
		'https://pic1.imgdb.cn/item/68ad227658cb8da5c84e67f1.png',
		'https://pic1.imgdb.cn/item/68ad227658cb8da5c84e67f1.png',
		'https://pic1.imgdb.cn/item/68ad227658cb8da5c84e67f1.png',
		'https://pic1.imgdb.cn/item/68ad227658cb8da5c84e67f1.png',
		'https://pic1.imgdb.cn/item/68ad227658cb8da5c84e67f1.png'
	])
	const current = ref(0)
	onMounted(() => {
		console.log("你好啊");
	})
	defineOptions({
		options: {
			styleIsolation: 'shared'
		}
	})
</script>

<style lang="scss" scoped>
	.title {
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
	}

	:deep(.wd-swiper__track) {
		height: 300rpx !important;
	}

	.card-swiper {
		margin: 0 32rpx;

		:deep(.custom-indicator-class) {
			bottom: 54rpx;
		}

		:deep(.custom-image) {
			width: 565rpx !important;
			height: 226rpx !important;
		}

		:deep(.custom-image-prev) {
			width: 488rpx !important;
			height: 196rpx !important;
		}

		:deep(.custom-image-next) {
			width: 488rpx !important;
			height: 196rpx !important;
		}
	}

	.tabs {
		margin-top: 40rpx;
		display: flex;
		align-items: center;

		.tab {
			width: 120rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 0.08);
			border-radius: 32rpx;
			border: 1rpx solid rgba(255, 255, 255, 0.12);
			font-size: 28rpx;
			color: #FFFFFF;
			margin-right: 20rpx;
		}
	}

	.make {
		position: fixed;
		bottom: calc(84rpx + env(safe-area-inset-bottom));
		background: #111111;
		padding: 20rpx 0;
		left: 0;
		right: 0;

		button {
			width: 684rpx;
			height: 92rpx;
			background: linear-gradient(90deg, #FEBA29 0%, #FF8F97 100%);
			border-radius: 46rpx;
			font-weight: 500;
			font-size: 32rpx;
			color: #FFFFFF;
		}
	}

	.photos {
		margin-top: 24rpx;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 22rpx;

		>view {
			aspect-ratio: 332/498;
			background: #D8D8D8;
			border-radius: 24rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>