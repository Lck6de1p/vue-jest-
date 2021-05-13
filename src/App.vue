<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="show">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Dialog v-if="dialogData.show" :dialogData="dialogData" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dialog from './components/Dialog.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Dialog
  },
  data() {
    return {
      dialogData: {
        show: false,
        data: {
          name: '12',
          region: 'shanghai',
          phone: '18906177267'
        }
      }
    }
  },
  methods: {
    show() {
      this.dialogData.show = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
