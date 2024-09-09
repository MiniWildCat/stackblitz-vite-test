<script setup lang="tsx">
// import MyHelloWorld2 from '@/components2/HelloWorld2.vue'
</script>

<template>
	<n-modal-provider>
		<Hello/>
		<!-- <HelloWorld/> -->
		<router-link to="/test1">test1、</router-link>
		<router-link to="/test2">test2、</router-link>
		<router-link to="/test3/index">test3、</router-link>
		<router-view></router-view>
		<!-- <a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a> -->
	</n-modal-provider>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.box-slide {
	width: 60px;
	height: 60px;
}
.box-slide.red {
	background: red;
	width: 60px;
}
.box-slide.blue {
	background: blue;
}
.box {
	display: flex;
}
/*
先from,再active,to,最后to,active移除
enter-from => 开始变化enter-active,然后enter-to => 移除
leave-from => 开始变化leave-active,然后leave-to => 移除
*/
.slide-enter-from {
	opacity: 0;
	display: none;
	transform: translateX(20px);
}
.slide-enter-to {
	/* 可以认定为结束状态,似乎不填写效果也差不多 */
	opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
	/* 1.如果不做显示与移除,则会因为盒子宽度占位,导致闪一下 */
	/* 2.display不可动画化,因此不能用于transition过渡 */
	display: block;
	/* 3.可以更平缓控制过渡的效果 */
	/* ease默认,很类似于ease,但加快时更平缓 */
	/* ease-in-out,开头和结尾都慢,中间快 */
	/* transition: all 1s ease; */
	transition: transform 1s ease, opacity 1s ease;
	/* 4.不能设置为opacity为1,否则会覆盖enter-from的opacity: 0,会导致在过渡开始时就已经不透明了 */
	/* opacity: 1; */
}
.slide-leave-from {
}
.slide-leave-to {
	opacity: 0;
	display: none;
	transform: translateX(-20px);
}
</style>
