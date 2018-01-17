<template>
  <div class="content-header"><h2>{{text}}</h2></div>
</template>

<script>
export default {
  name: 'content-header',
  props: {
    text: String
  }
}
</script>

<style>
  .content-header {
    text-align: center
  }
</style>


