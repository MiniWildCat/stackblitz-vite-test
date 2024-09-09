<template>
	<div>
		2222
		<n-form
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
	  </n-form>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const model = ref({
  inputValue: '456'
})
</script>

<style scoped>

</style>