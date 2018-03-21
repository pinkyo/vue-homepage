<template>
  <div class="author-content main-content">
    <content-header text="Author" />
    <div class="resources">
      <div>
        <div><h2>Who Am I</h2></div>
        <div class="author-info">
          <div class="author-pic-div"><img src="../static/author.jpg" ></div>
          <span>
            Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase "lorem ipsum" can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.
          </span>
        </div>
      </div>
      <div>
        <div><h2>What I Did</h2></div>
        <div class="author-did">
          <span>
            Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase "lorem ipsum" can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.
          </span>
        </div>
      </div>
      <div>
        <div><h2>Where Am I</h2></div>
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
  .author-info,.author-did  {
    font-size: 1.2rem;
    word-spacing: 0.1rem;
    font-weight: 100;
    color: darkolivegreen;
  }

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
</style>

