<template>
  <div id="app">
    <div>版本号:1.0.0</div>
    <button @click="updater()">检查更新</button>
    <div>下载进度:{{ percent }}</div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require('electron')
export default {
  data() {
    return {
      // 更新新版本显示
      // 网速
      speed: '',
      // 进度
      percent: ''
    }
  },
  created() {
  },
  mounted() {
    // 监听主进程发送的 'channel' 消息
    this.setupListener();
  },
  methods: {
    updater() {
      // ipcRenderer.send('check-for-update', { type: 'minimize' });
      ipcRenderer.send('check-for-update');
    },
    setupListener() {
      ipcRenderer.on('update', async (event, arg) => {
        console.log(arg);
        this.percent = arg.percent
      });
    }
  }
}
</script>

<style></style>