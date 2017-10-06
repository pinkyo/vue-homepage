<template>
  <div class="main" :class="{hidden: hidden}" @click="handleClick">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'main',
  computed: mapGetters({
    hidden: 'isHidden'
  }),
  methods: {
    handleClick() {
      if (this.hidden)
        this.$store.dispatch('show')
      else this.$store.dispatch('hide')
    }
  }
}
</script>

<style>
  .main {
    margin: 0 auto;
  }

  .hidden {
    display: none;
  }
</style>


