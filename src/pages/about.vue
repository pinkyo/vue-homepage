<template>
  <div class="about-content main-content">
    <content-header text="About" />
    <div class="resources">
      <div>
        <div class="content-sub-header"><h2>Orientation</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            I'm a professional <b>Java Developer</b>, and my main daily work is developing server side function.
            But, for that my company is one applying <b>Agile managment</b>, and under <b>scrum</b> developing procedure,
            I got many chances to take tasks of the front-end. I have joined a big React application in ABAC for
            about 6 months, and started to learn of frontend technology for hobby since then.
            <br/>
            VueJS is becoming more and more popular now, and I want to try it in a real work.
            <br/>
            So, I developed this home page site.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>What I use</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span>
            There are many modules used in my site:
            <ul>
                <li>VueJS</li>
                <li>Vue-Router</li>
                <li>Element-UI</li>
                <li>Vue-Amap</li>
                <li>Vue-I18n</li>
                <li>Vuex</li>
                <li>...</li>
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
