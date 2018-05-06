<template>
  <div class="home-cat-svg-div">
    <i class="home-cat-svg" v-html="catSvg" />
  </div>
</template>

<script>
import catSvg from '@/static/cat.svg'

export default {
  name: 'home',
  data: () => ({catSvg})
}
</script>


<style>
  .home-cat-svg svg {
    width: 40rem;
  }

  .home-cat-svg-div {
    margin: 3rem auto 0;
    width: 40rem;
  }
</style>
