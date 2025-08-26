<template>
	<view>
		<view style="height: 100px;" :key="item" v-for="item in 20">
			这是首页
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	onMounted(() => {
		console.log("你好啊");
	})
</script>

<style lang="less">
</style>