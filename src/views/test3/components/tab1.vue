<template>
	<div>
		1111
		<!-- <n-form
      ref="formRef"
      :model="model"
      label-placement="left"
      :label-width="160"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-form-item label="Input" path="inputValue">
        <n-input v-model:value="model.inputValue" placeholder="Input" />
      </n-form-item>
	  </n-form> -->
	  <div>{{ items?.inputValue }}</div>
	  <div>{{ name }}</div>
	  <button @click="handleClick">查看</button>
	</div>
</template>

<script setup lang="ts">
import {h, ref, toRefs} from 'vue'
const model = ref({
  inputValue: '123'
})
const props = defineProps({
  items: Object,
  name: String
})
const {items,name} = toRefs(props)
const handleClick = ()=>{
	console.log("数据",name)
}
</script>

<style scoped>

</style>