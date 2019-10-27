<template>
  <div>
    <!-- <content-header :text="$t('home_page.title')" /> -->
    <div class="home-cat-svg-div">
      <i class="home-cat-svg"><starSVG /></i>
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
import starSVG from '@/static/star.svg'

export default {
  name: 'home',
  components: {
    contentHeader,
    starSVG
  },
  // data: () => ({starSVG})
}
</script>


<style scoped>
  @import './home.css';
</style>
