<template>
  <div class="author-content main-content">
    <!-- <content-header :text="$t('author_page.title')" /> -->
    <!-- <div class="resources">
      <div>
        <div class="resource_item_content content-sub-div author-brief-info">
          <div class="author-pic-div">
            <img src="../../static/author.png">
          </div>
          <span>
            {{$t('author_page.brief')}}
          </span>
          <div>
            <a class="github_link" target="_blank" href="https://github.com/pinkyo">
              <font-awesome-icon :icon="['fab', 'github']" /></a>
            <a class="csdn_link" target="_blank" href="https://blog.csdn.net/o_nikyo_o">
              <font-awesome-icon :icon="['fab', 'blogger']" /></a>
          </div>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>2012.09-2016.07</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.college_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>2015.12-2016.02</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.intern_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2>2016.03-2018.06</h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.first_job_interval'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2 v-t="'author_page.second_job_interval.title'"></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.second_job_interval.content'"></span>
        </div>
      </div>
      <div>
        <div class="content-sub-header">
          <h2 v-t="'author_page.what_i_did.title'"></h2>
        </div>
        <div class="resource_item_content content-sub-div">
          <span v-t="'author_page.what_i_did.content'"></span>
        </div>
      </div>

    </div> -->

    <div class="container">
      <div class="hero">
        <h1 class="name"><strong>Kainian</strong> Yin</h1>
        <span class="job-title">Web Developer</span>
        <span class="email">kainian.yin@outlook.com</span>

        <h2 class="lead">Development and design of web applications
          for startups and large companies</h2>
      </div>
    </div>

    <!-- Skills and intrest section -->
    <div class="container">

      <div class="sections">
        <h2 class="section-title">Skills</h2>

        <div class="list-card">
          <span class="exp">+ 3 years</span>
          <div>
            <h3>Object programming & frameworks</h3>
            <span>Spring, MyBatis, Hibernates</span>
          </div>
        </div>

        <div class="list-card">
          <span class="exp">+ 3 years</span>
          <div>
            <h3>Design integration</h3>
            <span>React, Vue, CSS, Html</span>
          </div>
        </div>

        <div class="list-card">
          <span class="exp">+ 3 years</span>
          <div>
            <h3>Linux</h3>
            <span>Scripting, Servers management and protocols, Automation</span>
          </div>
        </div>


      </div>
      <div class="sections">
        <h2 class="section-title">Interests</h2>

        <div class="list-card">
          <div>
            <h3>Scripting languages</h3>
            <span>PHP, JS, Bash, Python</span>
          </div>
        </div>

        <div class="list-card">
          <div>
            <h3>Hacking</h3>
            <span>Linux, Crawlers, Bots, Network</span>
          </div>
        </div>

        <div class="list-card">
          <div>
            <h3>Life</h3>
            <span>Climbing, Swimming</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Achievements -->

    <div class="container cards">

      <div class="card">
        <div class="skill-level">
          <span>+</span>
          <h2>10</h2>
        </div>

        <div class="skill-meta">
          <h3>Projects</h3>
          <span>Adapting and creating solutions for customer's needs</span>
        </div>
      </div>

      <div class="card">
        <div class="skill-level">
          <h2>50</h2>
          <span>%</span>
        </div>

        <div class="skill-meta">
          <h3>Java</h3>
          <span>Server development with Java</span>
        </div>
      </div>


      <div class="card">
        <div class="skill-level">
          <h2>30</h2>
          <span>%</span>
        </div>

        <div class="skill-meta">
          <h3>Web</h3>
          <span>Service portal development and performance profilling</span>
        </div>
      </div>


      <div class="card">
        <div class="skill-level">
          <h2>20</h2>
          <span>%</span>
        </div>

        <div class="skill-meta">
          <h3>Technical solutions</h3>
          <span>Such as web services, scripts, configurations</span>
        </div>
      </div>

    </div>

    <!-- Timeeline -->

    <div class="container">
      <ol class="timeline">
        <li>
          <p class="line">Experiences</p>
          <span class="point"></span>
          <p class="description">
            Webank
          </p>
          <p class="sub">JAVA Developer</p>
          <span class="date">Today - JUL. 2018</span>
        </li>

        <li>
          <span class="point"></span>
          <p class="description">
            Ericsson Mobile Data R&D (GuangZhon)
          </p>
          <p class="sub">JAVA Developer</p>
          <span class="date">JUN. 2018 - Sep. 2016</span>
        </li>

        <li class="long-list-item">
          <p class="line">Education</p>
          <span class="point"></span>
          <p class="description">
            SUN YAT-SEN UNIVERSITY
          </p>
          <p class="sub">Computer Science And Technology</p>
          <span class="date">2012 - 2016</span>
        </li>

        <!-- <li>
          <span class="point"></span>
          <p class="description">
            Art & Design studies
          </p>
          <span class="date">2013 - 2008</span>
        </li> -->
      </ol>
    </div>

    <div class="container">
      <div class="amap-container">
        <p class="line">Adress</p>
        <div class="amap-page-container">
          <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events"
            class="amap-demo">
            <el-amap-marker vid="component-marker" :position="componentMarker.position"
              :content-render="componentMarker.contentRender">
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
  const contentHeader = () => import('@/components/content-header')

  const amapManager = new VueAMap.AMapManager();

  export default {
    name: 'author-content',
    components: {
      contentHeader
    },
    data: function () {
      return {
        //地理编码
        center: [113.875138, 22.570366],
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
          position: [113.875138, 22.570366],
          contentRender: (h, instance) => {
            // if use jsx you can write in this
            // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
            return h(
              'font-awesome-icon', {
                props: {
                  icon: 'map-marker-alt'
                }
              },
              ['marker inner text']
            )
          }
        }
      };
    },
    methods: {
      getMap() {}
    }
  }

</script>

<style scoped>
  @import './author.css';

</style>
