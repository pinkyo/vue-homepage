<template>
  <div class="angular-content main-content">
    <div class="resources"></div>
  </div>
</template>

<script>
  const contentHeader = () => import('@/components/content-header');

  export default {
    name: 'angular-content',
    components: { contentHeader }
  };
</script>

<style scoped></style>
