<template>
  <div class="react-content main-content">
    <!-- <div class="content-resources">
      <ul>
        <project-item
          href="https://github.com/pinkyo/validatorjs"
          name="validatorjs"
          description="centra validation provider when developing using es6+."
        />
      </ul>
    </div> -->
  </div>
</template>

<script>
  const contentHeader = () => import('@/components/content-header');
  const projectItem = () => import('@/components/project-item');

  export default {
    name: 'react-content',
    components: {
      contentHeader,
      projectItem
    }
  };
</script>

<style scoped>
  .react-content .header-description {
    font-size: 30px;
    padding: 0;
    text-align: center;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: white;
    font-style: normal;
  }
</style>
