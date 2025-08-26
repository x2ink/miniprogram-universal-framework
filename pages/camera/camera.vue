<template>
	<view class="wrap">
		<cover-image v-show="result" style="width: 100%;flex: 1;" :src="result"></cover-image>
		<camera v-show="!result" output-dimension="max" frame-size="large" resolution="high" device-position="front"
			flash="off" style="width: 100%;flex: 1;"></camera>
		<cover-view class="tip">这是相机提示的文案</cover-view>
		<view class="bottom _GCENTER">
			<view v-if="result" class="complete">
				<button class="_GCENTER" @click="result=null">更换照片</button>
				<button class="_GCENTER">确定</button>
			</view>
			<view v-else>
				<image @click="takePhoto()" src="/static/logo.png" mode="aspectFit" class="takebtn"></image>
			</view>
		</view>
		<safeAreaBottom></safeAreaBottom>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import safeAreaBottom from "@/components/safeAreaBottom/safeAreaBottom.vue"
	const result = ref(null)
	const takePhoto = () => {
		const ctx = uni.createCameraContext();
		ctx.takePhoto({
			quality: 'high',
			success: (res) => {
				result.value = res.tempImagePath
			}
		});
	}
</script>
<style lang="scss" scoped>
	.wrap {
		background-color: black;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.bottom {
		height: 392rpx;
		background: #000000;
	}

	.tip {
		position: absolute;
		z-index: 3;
	}

	.takebtn {
		width: 160rpx;
		height: 160rpx;
	}

	.complete {
		display: flex;
		align-items: center;
		gap: 38rpx;

		button {
			width: 308rpx;
			height: 84rpx;
			border-radius: 8rpx;
			font-size: 28rpx;

			&:nth-of-type(1) {

				color: #FFFFFF;
				border: 2rpx solid #FFFFFF;
			}

			&:nth-of-type(2) {
				background: #FFFFFF;
			}
		}
	}
</style>