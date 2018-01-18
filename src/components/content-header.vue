<template>
  <div class="content-header"><h1>{{text}}</h1></div>
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
    text-align: center;
    font-size: 60px;
    letter-spacing: 0.01em;
    margin: 0;
    padding: 1rem;
  }

  .content-header h1 {
    margin: 0;
    padding: 0;
  }
</style>


