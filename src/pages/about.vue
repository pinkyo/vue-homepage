<template>
  <div class="amap-page-container">
    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>

<style>
  .amap-page-container {
    height: 20rem;
  }
</style>

<script>
  // NPM 方式
  import VueAMap from 'vue-amap';

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
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            alert('map clicked');
          }
        },
        plugin: ['ToolBar', {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }]
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
