<template>
  <div class="author-content main-content">
    <content-header text="Author" />
    <div class="resources">
      <div>
        <div class="content-sub-header"><h2>Who Am I</h2></div>
        <div class="resource_item_content content-sub-div">
          <div class="author-pic-div"><img src="../static/author.png" ></div>
          <span>
            Kainian Yin, a naive coder, love technology and new experience. <b>2016-07</b>, I graduated from SUN-YAT-SEN UNIVERSITY in Mainland China, major is
            <i>Computer Science And Technology</i>. After graduation, I worked as an intern in Payeco Co.Ltd firstly, but I found that it coundn't meet my interest in
             daily work and I left soon. Then, I got a job chance to work for Ericsson GZ, a department focused on Internet related bussiness, and I have been stayed in Ericsson since then.
          </span>
          <br><br>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>What I Did</h2></div>
        <div class="resource_item_content content-sub-div">
          <span>
            It's hard for me to describe what I did in the past, things are either small or just parts of a big project. I own neccessary skills
            to join a big project and make it succeed, like good code smell and enough logical thoughts, but nothing special, I love coding and regard it as an
            important of my life. In the year of <i>2017</i>, I start joining Open Source Community and publish a npm module named
            <i><a href="https://github.com/pinkyo/validatorjs">ValidatorJs</a></i>, pretty simple and small. I will continue to try new thing in IT and
            places I never reached in the past. Lift won't stop, and I will keep going forward.
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
import VueAMap from 'vue-amap';
import contentHeader from '@/components/content-header'

const exampleComponents = {
    props: ['text'],
    template: `<div class="marker-content">text from  parent: {{text}}</div>`
}

const amapManager = new VueAMap.AMapManager();

export default {
  name: 'author-content',
  components: {contentHeader},
  data: function() {
    return {
      //地理编码
      center: [113.3423400000, 23.1707200000],
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
        position: [113.3423400000, 23.1707200000]
      },
    };
  },
  methods: {
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap);
      // gaode map instance
      console.log(amapManager._map);
    }
  }
}
</script>

<style>
  .author-pic-div {
    float: left;
    padding-right: 1rem;
  }

  .author-pic-div img {
    border-radius: 4rem;
    width: 8rem;
    height: 8rem;
    box-shadow: 2rem 0 0;
    box-shadow: 0 0 2rem black;
  }

  .amap-page-container {
    height: 12rem;
  }

  #amapDemo {
    border-radius: 4px;
  }

  .position-marker {
    color: rgb(102, 9, 9);
    font-size: 1.5rem;
    transition: 0.3s font-size ease-out
  }

  .position-marker:hover {
    font-size: 1.8rem;
    transition: 0.3s font-size ease-in
  }

  div.resources:last-child {
    margin-bottom: 3rem;
  }
</style>

