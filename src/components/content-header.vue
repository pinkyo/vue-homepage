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
    font-size: 54px;
    margin: 0;
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: lightblue;
  }

  .content-header h1 {
    margin: 0;
    padding: 0;
  }
</style>


