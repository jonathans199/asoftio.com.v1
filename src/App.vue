<template>
  <div id="app">
     <p>
      <router-link to="/"></router-link>
    </p>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import '@/../assets/css/main.scss';

</style>

<script>

import Vue from 'vue'
import Toasted from 'vue-toasted'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import config from '@/config/settings'

Vue.use(BootstrapVue)
Vue.use(Toasted)

export default {
 

  methods:{
    
  }
}

</script>