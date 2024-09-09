<template>
	<div>
		<div @click="activeTab=(activeTab == '1' ? '2' : '1')">这是test3--{{ activeTab }}</div>
		<div>获取<button @click="handleClick">ref查看</button></div>
		<!-- <div style="display: flex;">
			<transition name="slide" >
				<keep-alive>
					<tab1 v-if="activeTab == '1'" />
					<tab2 v-else/>
				</keep-alive>
			</transition>
		</div> -->

		<!-- tabs也是采用上述的transition和v-if实现的，但并没有做做任何缓存 -->
		<!-- <n-tabs v-model:value="activeTab" type="line" animated>
			<n-tab-pane name="1" tab="tab1">
				<tab1 />
			</n-tab-pane>
			<n-tab-pane name="2" tab="tab2">
				<tab2 />
			</n-tab-pane>
			<n-tab-pane name="3" tab="tab3">
				<div ref='tabRef'>aaa</div>
			</n-tab-pane>
			<n-tab-pane name="4" tab="tab4">
				<div ref='tabRef'>bbb</div>
			</n-tab-pane>
		</n-tabs> -->

		<button @click="name += 1">变更name</button>
		<tab1 :items="modelForm" :name="name"/>
	</div>
</template>

<script setup lang="ts">
import tab1 from './components/tab1.vue';
import tab2 from './components/tab2.vue';
import {ref} from 'vue'
const activeTab = ref('1');
const tabRef = ref(null);

const name = ref("555")
const modelForm = ref({
  inputValue: '123'
})
const handleClick = ()=>{
	console.log(tabRef.value)
}
</script>

<style lang="scss" scoped>
.slide-enter-from{
    opacity: 0;
    display: none;
    transform: translateX(20px);
}
.slide-enter-to{
	/* 可以认定为结束状态,似乎不填写效果也差不多 */
	opacity: 1;
}
.slide-enter-active,
.slide-leave-active{
	/* 1.如果不做显示与移除,则会因为盒子宽度占位,导致闪一下 */
	/* 2.display不可动画化,因此不能用于transition过渡 */
	display: block;
	/* 3.可以更平缓控制过渡的效果 */
	/* ease默认,很类似于ease,但加快时更平缓 */
	/* ease-in-out,开头和结尾都慢,中间快 */
	/* transition: all 1s ease; */
	transition: transform 0.2s ease-in, opacity 0.5s ease;
	/* 4.不能设置为opacity为1,否则会覆盖enter-from的opacity: 0,会导致在过渡开始时就已经不透明了 */
	/* opacity: 1; */
}
.slide-leave-from{
}
.slide-leave-to{
	opacity: 0;
	display: none;
    transform: translateX(-20px);
}
</style>