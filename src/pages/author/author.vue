<template>
  <div>
    <div class="save-btn-div">
      <el-button type="primary" @click="savePageToPng">保存</el-button>
      <a type="hidden" id="save_href" download="author.png"></a>
    </div>
    <div class="author-content main-content" id="author-div">
      <div class="container">
        <div>
          <img src="../../static/author.png" width="150px" />
        </div>
        <div class="hero">
          <h1 class="name">
            <span>{{ $t('author_page.author.name') }}</span>
            <!-- <strong>Kainian</strong> Yin -->
          </h1>
          <span class="job-title">Java/GoLang Developer</span>
          <span class="email">yinkn@outlook.com</span>

          <h2 class="lead">Development and design of Web applications</h2>
        </div>
      </div>

      <!-- Skills and intrest section -->
      <div class="container">
        <div class="sections">
          <h2 class="section-title">Skills</h2>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
            <div>
              <h3>Object programming & frameworks</h3>
              <span>Spring, MyBatis, Hibernates</span>
            </div>
          </div>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
            <div>
              <h3>Design integration</h3>
              <span>React, Vue, CSS, Html</span>
            </div>
          </div>

          <div class="list-card">
            <span class="exp">+ 4 years</span>
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
              <span>JS, Bash, Python</span>
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

      <!-- Timeline -->

      <div class="container">
        <p class="line">Experience</p>
        <ol class="timeline">
          <li>
            <!-- <p class="line">Education</p> -->
            <span class="point"></span>
            <p class="description">SUN YAT-SEN UNIVERSITY</p>
            <p class="sub">Computer Science And Technology</p>
            <span class="date">Sep. 2012 - JUN. 2016</span>
          </li>

          <li>
            <span class="point"></span>
            <p class="description">Ericsson Mobile Data R&D Co.,Ltd</p>
            <p class="sub">JAVA Developer</p>
            <span class="date">Sep. 2016 - JUN. 2018</span>
          </li>

          <li>
            <!-- <p class="line">Experiences</p> -->
            <span class="point"></span>
            <p class="description">Webank</p>
            <p class="sub">JAVA Developer</p>
            <span class="date">JUL. 2018 - ARP. 2022</span>
          </li>
          <li>
            <span class="point"></span>
            <p class="description">Shopee</p>
            <p class="sub">GoLang Developer</p>
            <span class="date">ARP. 2022 - Today</span>
          </li>
        </ol>
      </div>

      <div class="container">
        <div class="amap-container">
          <p class="line">Adress</p>
          <div class="amap-page-container">
            <el-amap
              ref="map"
              vid="amapDemo"
              :amap-manager="amapManager"
              :center="center"
              :zoom="zoom"
              :events="events"
              class="amap-demo"
            >
              <el-amap-marker
                vid="component-marker"
                :position="componentMarker.position"
                :content-render="componentMarker.contentRender"
              ></el-amap-marker>
            </el-amap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// NPM 方式
import VueAMap from 'vue-amap';
import html2canvas from 'html2canvas';
const amapManager = new VueAMap.AMapManager();

export default {
  name: 'author-content',
  mounted() {},
  data: function () {
    return {
      //地理编码
      center: [113.875138, 22.570366],
      amapManager,
      zoom: 20,
      events: {
        init: (o) => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity((result) => {
            console.log(result);
          });
        }
      },
      componentMarker: {
        position: [113.875138, 22.570366],
        contentRender: (h, instance) => {
          // if use jsx you can write in this
          // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
          return h(
            'font-awesome-icon',
            {
              props: {
                icon: 'map-marker-alt'
              }
            },
            ['marker inner text']
          );
        }
      }
    };
  },
  methods: {
    getMap() {},
    savePageToPng() {
      let authroDiv = document.getElementById('author-div');
      html2canvas(authroDiv).then(function (canvas) {
        let butSave = document.getElementById('save_href');
        butSave.onclick = function () {
          /*
           * 传入对应想要保存的图片格式的mime类型
           * 常见：image/png，image/gif,image/jpg,image/jpeg
           */
          let tempSrc = 'data:application/octet-stream;base64' + canvas.toDataURL('image/png');
          butSave.href = tempSrc;
        };
        butSave.click();
      });
    }
  }
};
</script>

<style scoped>
@import './author.css';
</style>
