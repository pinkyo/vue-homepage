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
    font-size: 4rem;
    margin: 0;
    padding: 1rem;
    font-family: 'Rubik';
    font-weight: 700;
  }

  .content-header h1 {
    margin: 0;
    padding: 0;
  }
</style>


