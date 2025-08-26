<template>
	<view class="navbar" :style="{background}">
		<!-- height of status bar -->
		<view :style="{height:navBarHeight}"></view>
		<!--  navigation -->
		<view v-if="!hideNav" class="nav">
			<!-- back button -->
			<view v-if="type=='avatar'" style="display: flex;align-items: center;">
				<image class="avatar" src="/static/logo.png" mode="aspectFit"></image>
				<view class="avatar-title">
					{{avatarTitle}}
				</view>
			</view>
			<view v-else class="backs">
				<image class="back" src="/static/logo.png" mode="aspectFit"></image>
				<text>{{navTitle}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	const navBarHeight = ref(0)
	const back = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	onMounted(() => {
		const systemInfo = wx.getWindowInfo();
		const statusBarHeight = systemInfo.statusBarHeight;
		navBarHeight.value = statusBarHeight + 'px'
	})
	const props = defineProps({
		background: {
			type: String,
			default: 'transparent'
		},
		title: {
			type: String,
			default: ""
		},
		navTitle: {
			type: String,
			default: ''
		},
		avatarTitle: {
			type: String,
			default: '三星堆影像馆'
		},
		hideNav: {
			default: false,
			type: Boolean
		},
		type: {
			type: String,
			default: "avatar"
		}
	})
</script>

<style scoped lang="scss">
	.navbar {
		padding: 0 32rpx 24rpx 32rpx;

		.nav {
			position: relative;

			.backs {
				display: flex;
				align-items: center;

				.back {
					width: 60rpx;
					height: 60rpx;
				}

				text {
					font-size: 34rpx;
					color: #FFFFFF;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translateX(-50%) translateY(-50%);
				}
			}


			.avatar-title {
				font-weight: 500;
				font-size: 28rpx;
				color: #FFFFFF;
			}

			.avatar {
				width: 64rpx;
				height: 64rpx;
				background: #D8D8D8;
				border: 2rpx solid #979797;
				border-radius: 50%;
				margin-right: 16rpx;
			}
		}

		// position: fixed;
		// left: 0;
		// right: 0;
		// top: 0;
		// background-color: white;
		// height: 45px;
		// display: flex;
		// align-items: center;
		// justify-content: space-between;
		// padding: 0 12px;
		// .navbar-title {
		// 	font-weight: 600;
		// 	font-size: 18px;
		// 	position: absolute;
		// 	left: 50%;
		// 	transform: translateX(-50%);
		// }

		// .nav-btn {
		// 	width: 40px;
		// 	height: 40px;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	color: #333;
		// 	font-size: 18px;
		// }

	}
</style>