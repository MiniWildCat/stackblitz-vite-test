<template>
	<div class="box2">
		<el-button type="primary" @click="showModal2 = true">来吧</el-button>
		<n-button type="primary" @click="showModal = true"> 来吧666 </n-button>
		<div>我是test1--</div>
		<div>--{{ name.name }}</div>
		<div>--{{ name2.name }}</div>
		<div>--{{ name3 }}</div>
		<div>--{{ arr }}</div>
		<div>--{{ obj.list }}</div>
		<div>--{{ showObj }}</div>
		<div>--{{ obj2 }}</div>
		<button @click="changeModel">变化</button>

		<div>model: {{ age1 }}{{ age2 }}</div>
		<div>a: {{ a }}</div>
		<div>model3: {{ model3 }}</div>

		<n-modal v-model:show="showModal">
			<n-card
				style="width: 600px"
				title="模态框"
				:bordered="false"
				size="huge"
				role="dialog"
				aria-modal="true"
			>
				<template #header-extra> 噢！ </template>
				内容
				<template #footer> 尾部 </template>
			</n-card>
		</n-modal>

		<el-dialog
			append-to-body
			v-model="showModal2"
			title="Notice"
			width="500"
			destroy-on-close
			center
		>
			<span>
				Notice: before dialog gets opened for the first time this node and the
				one bellow will not be rendered
			</span>
			<div>
				<strong>Extra content (Not rendered)</strong>
			</div>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="centerDialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="centerDialogVisible = false">
						Confirm
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="tsx">
import {
	onMounted,
	ref,
	isRef,
	toRaw,
	shallowRef,
	triggerRef,
	customRef,
	reactive,
	readonly,
	shallowReactive,
  toRefs,
} from "vue";

const showModal = ref(false);
const showModal2 = ref(false);
const model = reactive({ age1: '1', age2: '2' })
const model2 = ref({ age1: '1', age2: '2' })
// 已经转换成ref响应式变量
const {age1,age2} = toRefs(model)

let b = ref({ x: "111" });
let c = reactive({ x: "111" });
let a = toRaw(c);

const model3 = readonly(model2)

const changeModel = () => {
	// // a与b.value值是相同的，但是不会触发b页面上的刷新
	// a.x = "222"
	// console.log(a,c)
	// console.log(age1.value)
	model3.value = { age1: '11', age2: '22' }
}

onMounted(() => {
	console.log("test1 onMounted");
});
console.log("test1 onCreated");

const name = ref({ name: "1" });
const name2 = shallowRef({ name: "2" });
console.log(name, isRef(name), isRef(name.value));
const handleClick2 = () => {
	// (1.直接赋值有效
	// name2.value = {name:"0"}
	// (2.修改内容无效
	// name2.value.name = "0"
	// (3.triggerRef强制更新shallowRef
	// triggerRef(name2);
	// (4.shallowRef被ref同化，因此函数的上下文中不能同时使用两种ref.
	// setTimeout(()=>{
	// 	name.value.name = "0"
	// },1000)
	// console.log(name2.value)
};

let timer = null;
function myRef(value) {
	return customRef((track, trigger) => {
		return {
			// track用于收集依赖，trigger用于触发 依赖
			get() {
				track();
				return value;
			},
			set(newVal) {
				if (timer) clearTimeout(timer);
				timer = setTimeout(() => {
					console.log("触发了set");
					value = newVal;
					trigger();
				}, 500);
			},
		};
	});
}
const name3 = myRef("hello");
const handleClick3 = () => {
	name3.value = "world";
};

const arr = reactive([1, 2, 3]);
const obj = reactive({
	list: [],
});
// (3.只读变量声明，不允许赋值，如果obj是响应式变量，则也会被影响
const showObj = readonly(arr);
// (4.浅层reactive变量
const obj2 = shallowReactive({
	a: {
		num: 1,
	},
});
const handleClick = () => {
	// // (1通过数组的方法，push+解构的方式
	// arr.push(...[3,4,5])
	// // (2初始化用对象 包裹数组{arr:[]}
	// obj.list = [3,4,5]
	// (4.类似于shallowRef，只对第一层有效，深层次改变则只会影响数值
	// obj2.a = {num:2}
	// console.log(obj2)
	// 如果上下文有当前变量的第一层的赋值，则也会触发更新。反之，值变而页面不更新
	// obj2.a.num = 3
	// console.log(obj2)
};
</script>

<style scoped>
.box {
	background: red;
	color: white;
}
</style>
