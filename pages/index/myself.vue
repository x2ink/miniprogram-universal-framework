<template>
	<view style="padding:0 32rpx 32rpx 32rpx;">
		<view style="display: flex;justify-content: flex-end;">
			<view :style="{marginRight:barWidth+'px'}" class="setting">

			</view>
		</view>
		<view class="userinfo">
			<image class="avatar" src="/static/logo.png" mode="aspectFit"></image>
			<view class="profile">
				<view class="nickname">
					点击填写昵称
				</view>
				<view style="margin-top: 8rpx;display: flex;align-items: center;">
					<text class="id">ID：2023001</text>
					<image class="copy" src="/static/logo.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="tools">
			<view>
				我的人脸图
			</view>
			<view>
				我的预约
			</view>
		</view>
		<view class="title">
			作品
		</view>
		<view class="offing">
			<view v-for="item in 20" :key="item">
				<image src="/static/logo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	const barWidth = ref(wx.getMenuButtonBoundingClientRect().width)
	onMounted(() => {
	
	})
</script>

<style lang="less" scoped>
	.setting {
		width: 60rpx;
		height: 60rpx;
		background: #FFFFFF;
		opacity: 0.5;
		border-radius: 50%;
	}

	.offing {
		margin-top: 24rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8rpx;

		>view {
			aspect-ratio: 224/336;
			background: #D8D8D8;
			border-radius: 16rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.title {
		margin-top: 32rpx;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
	}

	.tools {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 32rpx;

		view {
			box-sizing: border-box;
			padding: 40rpx 30rpx;
			font-weight: 500;
			font-size: 28rpx;
			color: #FFFFFF;

			&:nth-of-type(1) {
				width: 398rpx;
				height: 120rpx;
				background: rgba(255, 255, 255, 0.07);
				border-radius: 24rpx;
			}

			&:nth-of-type(2) {
				width: 264rpx;
				height: 120rpx;
				background: rgba(255, 255, 255, 0.07);
				border-radius: 24rpx;
			}
		}
	}

	.userinfo {
		display: flex;
		align-items: center;

		.avatar {
			width: 116rpx;
			height: 116rpx;
			border-radius: 50%;
		}

		.profile {
			margin-left: 20rpx;

			.copy {
				width: 24rpx;
				height: 24rpx;
			}

			.nickname {
				font-weight: 500;
				font-size: 32rpx;
				color: #FFFFFF;
			}

			.id {
				font-size: 24rpx;
				color: rgba(255, 255, 255, 0.64);
			}
		}
	}
</style>