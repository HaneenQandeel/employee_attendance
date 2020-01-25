<template>
  <div>
    <p>{{curentCount}}</p>
    <button v-on:click="increment()">Add</button>
    <p>{{}}</p>

  </div>

</template>

<script>
//import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapMutations(['increment']),
    ...mapGetters(['curentCount'])
  }


}

</script>
