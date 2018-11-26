<template>
  <div>
    <content-header text="Home" />
    <div class="home-cat-svg-div">
      <i class="home-cat-svg" v-html="catSvg" />
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
import catSvg from '@/static/cat.svg'

export default {
  name: 'home',
  components: {
    contentHeader
  },
  data: () => ({catSvg})
}
</script>


<style scoped>
  .home-cat-svg svg {
    width: 4rem;
  }

  .home-cat-svg-div {
    margin: 2rem auto 0;
    width: 4rem;
  }
</style>
