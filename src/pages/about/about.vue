<template>
  <div class="about-content main-content">
    <content-header text="About" />
    <div class="resources">
      <div>
        <div class="content-sub-header first-about-sub-header"><h2>Orientation</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            I'm a professional <b>Java Developer</b>, and my main daily work is developing server side function.
            But, for that my company is one applying <b>Agile project managment</b>, and under <b>Scrum Development </b>,
            I got many chances to take tasks of the front-end. I have joined a big React application in ABAC for
            about 6 months, and started to learn of frontend technology as a hobby since then.
            <br/>
            VueJS is becoming more and more popular now, and I want to try it in a real work.
            <br/>
            Therefore, I developed this home page site.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>What I use</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span class="module-info">
            There are many modules used in this site:
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
          <i class="about-svg" v-html="aboutSVG"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const contentHeader = () =>import('@/components/content-header')
import aboutSVG from '@/static/about.svg'

export default {
  name: "about-content",
  components: {contentHeader},
  data() {
    return {
      aboutSVG
      }
  }
};
</script>

<style scoped>
  @import './about.css';
</style>
