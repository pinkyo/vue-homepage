<template>
  <div class="react-content main-content">
    <content-header text="React" />
    <p class="header-description">A JavaScript library for building user interfaces</p>
    <div class="content-resources">
      <ul>
        <project-item
          href="https://github.com/pinkyo/validatorjs"
          name="ValidatorJS"
          description="Central validator to provide validation solution when developing using ES6+."
        />
      </ul>
    </div>
  </div>
</template>

<script>
const contentHeader = () => import('@/components/content-header')
const projectItem = () => import('@/components/project-item')

export default {
  name: 'react-content',
  components: {contentHeader, projectItem}
}
</script>

<style scoped>
    .react-content .header-description {
    padding: 0;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: white;
    font-style: normal;
  }
</style>
