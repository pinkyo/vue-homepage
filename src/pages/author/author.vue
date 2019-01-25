<template>
  <div class="author-content main-content">
    <content-header text="Author" />
    <div class="resources">
      <div>
        <div class="resource_item_content content-sub-div author-brief-info">
          <div class="author-pic-div">
            <img src="../../static/author.png" >
          </div>
          <span>
            Kainian Yin, a prfessional software developer with more than 2-year working experience. I have been focusing on
            Java Web development and other IT technology related to my work like Javascript and Docker.
            With the evolution of modern software, I have been developing distributed software under Microservice architacture after
            graduation from college. I love my profession and seek friends who are on the same wavelength.
            And I hope to work with people with great passion, and make progress together. Visit me in my Github.
          </span>
          <div>
            <a class="github_link" target="_blank" href="https://github.com/pinkyo"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a class="csdn_link" target="_blank" href="https://blog.csdn.net/o_nikyo_o"><font-awesome-icon :icon="['fab', 'blogger']" /></a>
          </div>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2012.09-2016.07</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            Study in <b>SUN-YAT-SENT UNIVERSITY</b>, major in <b>Computer Science And Technology</b>. In my college years,
            I got solid technical fundation as a programmer, and made a good preparation for my job. SUN-YAT-SENT UNIVERSITY is
            a great place where its culture is open-minded and tolerant, I was deeply influenced and determined to be a responsible and brave
            man. I pretty cherish the memory of the 4-year college time.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2015.12-2016.02</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            Work as an intern in <b>Payeco Co.LTD</b>. During this period, I manly took the task to write a boundary program integrated with system
            in customs, which accept message from IBM MQ, deal with it and send the message to customs through FTP.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2016.03-2018.06</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            Work in <b>Ericsson mobile data application R&D(GuangZhou) Co.LTD</b>, a branch company of Ericsson that
            focused on Internet related bussiness like Iot and cloud.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2018.07-now</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            Join <b>Webank</b>, and I move to <b>ShenZhen</b> from GuangZhou. My
            Responsibility is to develop a test system with my teamates.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>What I Did</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
           I have joined several big projects like ABAC and CDM in Ericsson and been quite qualified for my task. I'm
           confident to facing any challenge coming in my career and life, I'll do my best and never let you down.
          </span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>Where Am I</h2></div>
        <div class="amap-page-container">
          <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
            <el-amap-marker vid="component-marker" :position="componentMarker.position">
              <i class="fas fa-location-arrow position-marker" title="I am here"></i>
            </el-amap-marker>
          </el-amap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// NPM 方式
import VueAMap from 'vue-amap'
const contentHeader = () =>import('@/components/content-header')

const amapManager = new VueAMap.AMapManager();

export default {
  name: 'author-content',
  components: {contentHeader},
  data: function() {
    return {
      //地理编码
      center: [113.855757,22.61176],
      amapManager,
      zoom: 20,
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        }
      },
      componentMarker: {
        position: [113.855757,22.61176]
      },
    };
  },
  methods: {
    getMap() {
    }
  }
}
</script>

<style scoped>
  @import './author.css';
</style>

