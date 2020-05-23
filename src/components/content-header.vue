<template>
  <div class="content-header">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'content-header',
    props: {
      text: String
    }
  };
</script>

<style>
  @import 'palette.css';

  .content-header {
    text-align: center;
    margin: 0;
    font-size: 30px;
    color: var(--color1);
  }

  .content-header h1 {
    margin: 0;
    padding: 0;
  }
</style>
