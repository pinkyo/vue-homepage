<template>
  <div class="main" :class="{hidden: hidden}" @click="handleClick">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  data: function() {
    return {
      hidden: false,
    }
  },
  methods: {
    handleClick: function() {
      this.hidden = true
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


