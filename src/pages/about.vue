<template>
  <div class="about-content main-content">
    <content-header text="About" />
    <div class="resources">
      <div>
        <div><h2>Why I do this</h2></div>
        <div class="resource_item_content">
          <span>
            I write this site, because I want to try VueJS. I have ever join a project and I got a chance
            to implement a web page using technical stack including ReactJS, Redux, SCSS and Webpack, since
            then I start to learn the frontend knowledge. Working with VueJS is just a hobby, and demo like
            this will be more, visit me in my github page.
          </span>
        </div>
        <div><a class="github_link" target="_blank" href="https://github.com/pinkyo"><i class="fab fa-github"></i></a></div>
      </div>
      <div>
        <div>
          <h2>What I Use</h2>
        </div>
        <div class="resource_item_content">
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
.github_link {
  font-size: 2rem;
  color: black;
}

.github_link:hover {
  color: black;
}

.github_link:visited {
  color: black;
}
</style>
