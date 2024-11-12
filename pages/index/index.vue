<template>
	<view class="content">
		<wd-button>主要按钮</wd-button>
		<wd-button type="success">成功按钮</wd-button>
		<wd-button type="info">信息按钮</wd-button>
		<wd-button type="warning">警告按钮</wd-button>
		<wd-button type="error">危险按钮</wd-button>
	</view>
</template>

<script setup>
	import {
		onMounted
	} from 'vue';
	import {
		userStore
	} from '@/stores';
	import $http from "@/api/index.js"
	onMounted(() => {
		console.log(userStore().token);
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>