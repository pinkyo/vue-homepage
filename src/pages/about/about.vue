<template>
  <div class="about-content main-content">
    <div class="resources">
      <div>
        <div class="content-sub-header first-about-sub-header">
          <h2 v-t="'about_page.orientation.title'"></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <p v-t="'about_page.orientation.p1'"></p>
          <p v-t="'about_page.orientation.p2'"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const contentHeader = () => import('@/components/content-header');

  export default {
    name: 'about-content',
    components: {
      contentHeader
    }
  };
</script>

<style scoped>
  @import './about.css';
</style>
