<template>
  <div class="vue-content main-content">
    <content-header text="Vue" />
    <div class="resources">
      <div class="content-resources">
        <ul>
          <li><a href="https://github.com/pinkyo/vue-homepage" target="_blank">Vue-Hompage</a>: Source code of this homepage site.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/content-header'

export default {
  name: 'vue-content',
  components: {contentHeader}
}
</script>

<style>

</style>

