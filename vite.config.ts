import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite';
import vueJsx from "@vitejs/plugin-vue-jsx"
import progress from 'vite-plugin-progress';
import {fileURLToPath, URL} from 'node:url'
import path from 'path'

// // 默认的Resolver
// function MyResolver() {
//   return {
//     type: "component",
//     resolve: (name) => {
//       if (name.match(/^(My|my-[a-z])/))
//         return { name, from: "@/components2" };
//     }
//   };
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    progress(),
    AutoImport({
			// dirs: ['src/utils'],
      imports: ["vue", "vue-router"],
      // 直接使用src/types/auto-import.d.ts， 会导致根目录下出现重复的auto-import文件
      dts: fileURLToPath(new URL('src/types/auto-import.d.ts', import.meta.url)),
      eslintrc: {
        // // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
        enabled: true,
        // 生成文件地址和名称
        filepath: fileURLToPath(
          new URL('src/types/eslintrc-auto-import.json', import.meta.url)
        ),
        // globalsPropValue: true
      }
    }),
    Components({
			// 默认引入‘src/components’
			// dirs: ['src/components','src/components2'],
			// 指定出口文件，默认根路径下/components.d.ts
      dts: 'src/typings/components.d.ts',
			// 这里可以配置UI组件库的组件
      resolvers: [
				// 自定义解析器一般用于重命名使用
				// MyResolver()
      ]
    }),
  ],
  resolve: {
    alias: {
       // 通过@替换./,例“./images/xxx.png”替换成“@/images/xxx.png”
      '@':fileURLToPath(new URL('./src', import.meta.url)),
      '~':path.resolve(process.cwd())
    }
  },
	server: {
		port: 3000
	}
})
