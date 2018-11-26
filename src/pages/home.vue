<template>
  <div>
    <content-header text="Home" />
    <div class="home-cat-svg-div">
      <i class="home-cat-svg" v-html="starSVG" />
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
import starSVG from '@/static/star.svg'

export default {
  name: 'home',
  components: {
    contentHeader
  },
  data: () => ({starSVG})
}
</script>


<style scoped>
  .home-cat-svg svg {
    width: 5rem;
  }

  .home-cat-svg-div {
    margin: 2rem auto 0;
    width: 5rem;
  }
</style>
