<template>
  <div id="app">
    <tableContent></tableContent>
  </div>
</template>

<script>
  import tableContent from './components/tableContent.vue'
  export default {
    name: 'app',
    components: {
      tableContent
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

  .drop {
    width: 30%;
  }
</style>
