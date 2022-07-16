<template>
 <IndexPage1></IndexPage1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IndexPage1 from './pages/index/index-page.vue';

@Options({
  components: {
    IndexPage1,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
