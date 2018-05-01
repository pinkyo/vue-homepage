<template>
  <div class="about-content main-content">
    <content-header text="About" />
    <div class="resources">
      <div>
        <div class="content-sub-header"><h2>Orientation</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            I'm a professional Java developer, and my main daily work is developing server side function.
            But, for that my company is one applying Agile managment, and under scrum developing Procedure,
            I got many chance to take task of front-end. I have jonined a big react application in ABAC for
            about 6 months, start to learn frontend technology for hobby.
            VueJS become more and more popular, and I want to try it in a real work. So I developed this site.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>What I use</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span>
            There are manay modules used in my site:
            <ul>
                <li>VueJS</li>
                <li>Vue-Router</li>
                <li>Element-UI</li>
                <li>vue-amap</li>
                <li>vue-i18n</li>
                <li>vuex...</li>
            </ul>
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
