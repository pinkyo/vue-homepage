<template>
  <div class="about-content main-content">
    <!-- <content-header :text="$t('about_page.title')" /> -->
    <div class="resources">
      <div>
        <div class="content-sub-header first-about-sub-header">
          <h2 v-t="'about_page.orientation.title'"></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <p v-t="'about_page.orientation.p1'"></p>
          <p v-t="'about_page.orientation.p2'"></p>
          <!-- <p v-t="'about_page.orientation.p3'"></p> -->
        </div>
      </div>
      <!-- <div>
        <div class="content-sub-header">
          <h2 v-t="'about_page.tools.title'"></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span class="module-info">
            <span v-t="'about_page.tools.start'"></span>
            <ul>
                <li>VueJS</li>
                <li>Vue-Router</li>
                <li>Element-UI</li>
                <li>Vue-Amap</li>
                <li>Vue-I18n</li>
                <li>Vuex</li>
                <li>...</li>
            </ul>
          </span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
const contentHeader = () =>import('@/components/content-header')
// import aboutSVG from '@/static/about.svg'

export default {
  name: "about-content",
  components: {
    contentHeader,
    // aboutSVG
  },
  // data() {
  //   return {
  //     aboutSVG
  //     }
  // }
};
</script>

<style scoped>
  @import './about.css';
</style>
