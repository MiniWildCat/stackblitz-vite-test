<template>
	<div>
		<div>hello666</div>
		<slot></slot>
		<slot name="name"></slot>
		<slot name="say" :words="'你好吗'"></slot>
		<div>{{ props.type }}</div>
	</div>
</template>

<script setup lang="ts">
import {useAttrs} from 'vue';
const props = defineProps({
	type: {
		type: String,
		default: 'hello'
	}
})
console.log("当前的是props", props,useAttrs())
</script>

<style scoped>

</style>