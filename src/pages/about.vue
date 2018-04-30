<template>
  <div class="about-content main-content">
    <content-header text="About" />
    <div class="resources">
      <div>
        <div class="content-sub-header"><h2><i class="fas fa-question" title="Why I do this"></i></h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            I write this site, because I want to try VueJS. I have ever join a project and I got a chance
            to implement a web page using technical stack including ReactJS, Redux, SCSS and Webpack, since
            then I start to learn the frontend knowledge. Working with VueJS is just a hobby, and demo like
            this will be more, visit me in my github page.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2><i class="fas fa-wrench" title="What I use"></i></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span>
            In this demo, I use VueJS + Webpack + VueX + VueRouter + Gaode Map + CSS ....., all is frontend
            tech.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/content-header'

export default {
  name: "about-content",
  components: {contentHeader}
};
</script>

<style>
</style>
