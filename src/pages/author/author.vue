<template>
  <div class="author-content main-content">
    <content-header :text="$t('author_page.title')" />
    <div class="resources">
      <div>
        <div class="resource_item_content content-sub-div author-brief-info">
          <div class="author-pic-div">
            <img src="../../static/author.png" >
          </div>
          <span>
            {{$t('author_page.brief')}}
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
          <span v-t="'author_page.college_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2015.12-2016.02</h2></div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.intern_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2>2016.03-2018.06</h2></div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.fist_job_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2 v-t="'author_page.second_job_interval.title'"></h2></div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.second_job_interval.content'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2 v-t="'author_page.what_i_did.title'"></h2></div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.what_i_did.content'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header"><h2 v-t="'author_page.where_i_am.title'"></h2></div>
        <div class="amap-page-container">
          <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
            <el-amap-marker vid="component-marker" :position="componentMarker.position">
              <font-awesome-icon :icon="['fa', 'location-arrow']"/>
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

