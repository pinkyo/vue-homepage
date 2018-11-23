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


<style scoped>
  .home-cat-svg svg {
    width: 4rem;
  }

  .home-cat-svg-div {
    margin: 3rem auto 0;
    width: 4rem;
  }
</style>
