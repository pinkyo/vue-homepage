<template>
  <div class="java-content main-content">
    <!-- <content-header text="Java" /> -->
    <!-- <div class="resources">
      <div class="content-resources">
        <ul>

        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
  const contentHeader = () => import('@/components/content-header');
  const projectItem = () => import('@/components/project-item');

  export default {
    name: 'java-content',
    components: { contentHeader, projectItem }
  };
</script>

<style scoped></style>
