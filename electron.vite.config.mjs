import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { createVuePlugin } from 'vite-plugin-vue2'


export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    plugins: [createVuePlugin()]
  }
})
