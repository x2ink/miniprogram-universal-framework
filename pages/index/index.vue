<template>
	<view class="root">
		<view class="content">
			<navbar></navbar>
			<scroll-view v-if="current==0" scroll-y="true" :style="{height: scrollHeight}">
				<Home></Home>
			</scroll-view>
			<scroll-view v-else scroll-y="true" :style="{height: scrollHeight}">
				<Myself></Myself>
			</scroll-view>
		</view>
		<!-- tabbar -->
		<view class="tabbar" :style="{paddingBottom:getOs()=='ios'?'env(safe-area-inset-bottom)':''}">
			<view class="tabbar-item _GCENTER">
				<image src="/static/logo.png" mode="aspectFit"></image>
				<text>首页</text>
			</view>
			<view class="tabbar-item _GCENTER">
				<image src="/static/logo.png" mode="aspectFit"></image>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		onMounted,
		ref
	} from 'vue';
	import {
		getOs
	} from '@/utils/common';
	import Home from "@/pages/index/home.vue"
	import Myself from "@/pages/index/myself.vue"
	import $http from "@/api/index.js"
	import $store from '@/stores/index.js'
	const current = ref(0)
	const navbarRef = ref(null)
	const navBarHeight = ref(0)
	const scrollHeight = computed(() => {
		return `calc(100vh - ${getOs()=='ios'?'env(safe-area-inset-bottom)':0} - ${navBarHeight.value} - 180rpx`
	})
	onMounted(() => {
		const systemInfo = wx.getWindowInfo();
		const statusBarHeight = systemInfo.statusBarHeight;
		navBarHeight.value = statusBarHeight + 'px'
	})
</script>

<style lang="scss">
	.root {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.content {
			flex: 1;
		}

		.tabbar {
			height: 120rpx;
			display: flex;
			align-items: center;
			background-color: red;

			.tabbar-item {
				display: flex;
				align-items: center;
				flex: 1;
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
	}
</style>