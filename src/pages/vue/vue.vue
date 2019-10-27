<template>
  <div class="vue-content main-content">
    <!-- <content-header text="Vue" /> -->
    <div class="resources">
      <div class="content-resources">
        <ul>
          <project-item href="https://github.com/pinkyo/vue-homepage" name="Vue-Hompage" description="Source code of this homepage site." />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
const projectItem = () => import('@/components/project-item')

export default {
  name: 'vue-content',
  components: {contentHeader, projectItem}
}
</script>

<style scoped>

</style>

