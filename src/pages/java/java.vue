<template>
  <div class="java-content main-content">
    <!-- <content-header text="Java" /> -->
    <div class="resources">
      <div class="content-resources">
        <ul>
          <project-item href="https://github.com/pinkyo/TreeGrowth" name="TreeGrowth" description="A toy program to generate ramda tree with JavaFX." />
          <project-item href="https://github.com/pinkyo/MultiwayMerge" name="MultiwayMerge" description="A mulitway merge implementation, and top k repeated key selector." />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
const projectItem = () => import('@/components/project-item')

export default {
  name: 'java-content',
  components: {contentHeader, projectItem}
}
</script>

<style scoped>

</style>

