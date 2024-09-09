<template>
    <div class="box22a">
        <div>我是test2</div>
        <div ref="myRef">{{ count }}</div>
		<!-- <button @click="count ++ ">变更</button> -->
		<div class="error seriousError red">
			警告一下1 <span class="inner">这是</span>
		</div>
		<div class="seriousError red">
			警告一下2 <span class="inner">这是</span>
		</div>
		<!-- <n-button @click="state.count ++">改变state.count--{{ state.count }}</n-button>
		<n-button @click="id ++">改变id-{{ id }}</n-button>
		<n-button @click="debouncedFn">防抖</n-button>
		<n-button @click="throttleFn">节流</n-button>
		<n-button @click="toggle">切换{{isFullscreen}}</n-button>
		<n-button @click="getClipboard">粘贴</n-button> -->
		<!-- <div>x:{{x}},y:{{ y }}</div> -->
		<div>{{ counter }}</div>
		<n-button @click="reset">重置</n-button>
		<n-button @click="pause">暂停</n-button>
		<n-button @click="resume">恢复</n-button>
		<n-button @click="handleCopy">复制{{ text }}</n-button>
		<div>{{ focused }}</div>
    </div>
</template>

<script setup lang="ts">
import { get } from 'http';
import {onMounted} from 'vue'
import {ref,reactive,watch,isRef,isReactive,watchEffect,onBeforeUpdate,onUpdated} from 'vue'
const name = ref(1)
watch(name,(newV,oldV)=>{
	console.log(newV,oldV)
},{
	immediate: true
})
</script>

<style lang="scss" scoped>
.box{
	background: blue;
	color: white;
}
button{
	color: red;
}

.error {
  border: 1px #f00;
  background-color: #fdd;
  .inner{
	color: blue
  }
}
.error.red{
	color: red;
}
.red:hover,
a:hover{
	color: red
}
.seriousError {
	@extend .error;
	div{
		@extend .error;
	}
}

  // extend继承样式规则,包含‘.error.red’，和子代,
  // 可以继承多个，但不能继承交集选择器比如‘.error.red’
//   @extend .error;
//   @extend .red;
//   border-width: 3px;
</style>