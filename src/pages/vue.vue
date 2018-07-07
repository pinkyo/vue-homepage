<template>
  <div class="vue-content main-content">
    <content-header text="Vue" />
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
import contentHeader from '@/components/content-header'
import projectItem from '@/components/project-item'

export default {
  name: 'vue-content',
  components: {contentHeader, projectItem}
}
</script>

<style>

</style>

