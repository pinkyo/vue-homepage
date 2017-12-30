<template>
  <div class="">
    <div class="about-header"><h2>About</h2></div>
    <div>
      <div><h3>Where Am I ?</h3></div>
      <div class="amap-page-container">
        <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
          <el-amap-marker vid="component-marker-icon" :position="componentMarker.position"></el-amap-marker>
          <el-amap-marker vid="component-marker-content" :position="componentMarker.position">
            <h1>I am here.</h1>
          </el-amap-marker>
        </el-amap>
      </div>
    </div>
  </div>
</template>

<style>
  .about-header {
    text-align: center;
    text-decoration: underline;
  }

  .amap-page-container {
    height: 12rem;
  }

  #amapDemo {
    border-radius: 4px;
  }
</style>

<script>
  // NPM 方式
  import VueAMap from 'vue-amap';

  const exampleComponents = {
      props: ['text'],
      template: `<div class="marker-content">text from  parent: {{text}}</div>`
  }

  const amapManager = new VueAMap.AMapManager();
  export default {
    name: "about",
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
  };
</script>
