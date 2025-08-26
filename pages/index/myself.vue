<template>
	<view>
		这是我的
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