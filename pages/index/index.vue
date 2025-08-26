<template>
	<view class="root">
		<view class="content">
			<scroll-view v-if="current==0" scroll-y="true" :style="{height: scrollHeight}">
				<navbar></navbar>
				<Home></Home>
			</scroll-view>
			<scroll-view v-else scroll-y="true" :style="{height: scrollHeight}">
				<navbar hideNav></navbar>
				<Myself></Myself>
			</scroll-view>
		</view>
		<!-- tabbar -->
		<view class="tabbar" :style="{paddingBottom:getOs()=='ios'?'env(safe-area-inset-bottom)':''}">
			<view :class="{'tabbar-active':current==item.value}" @click="current=item.value" :key="item.value"
				v-for="item in tabbars" class="tabbar-item _GCENTER">
				<image src="/static/logo.png" mode="aspectFit"></image>
				<text>{{item.key}}</text>
			</view>
		</view>
		<Login></Login>
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
	import Login from "@/components/login/login.vue"
	import $http from "@/api/index.js"
	import $store from '@/stores/index.js'
	const current = ref(0)
	const navbarRef = ref(null)
	const navBarHeight = ref(0)
	const scrollHeight = computed(() => {
		return `calc(100vh - ${getOs()=='ios'?'env(safe-area-inset-bottom)':0} - 88rpx`
	})
	const tabbars = ref([{
		value: 0,
		key: "首页"
	}, {
		value: 1,
		key: "我的"
	}])
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
			height: 88rpx;
			display: flex;
			align-items: center;

			.tabbar-active {
				color: #FFFFFF !important;
			}

			.tabbar-item {
				flex-direction: column;
				display: flex;
				align-items: center;
				flex: 1;
				color: rgba(240, 240, 240, 0.53);
				font-size: 20rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-bottom: 4rpx;
				}
			}
		}
	}
</style>