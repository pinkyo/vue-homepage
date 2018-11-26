<template>
  <el-container class="body-container">
    <el-container class="main-container">
      <el-aside width='3.5rem' style="overflow: hidden" class="main-left-aside">
        <div class="sit-icon">
          <router-link to="/" title="Home">
            <i class="menu-header-logo" v-html="menuHeaderSVG"/>
          </router-link>
        </div>
        <nav-menu />
      </el-aside>
      <el-container class="main-right-container">
        <el-main style="padding: 0">
            <div class="main-div">
              <transition enter-class="fade" enter-to-class="fade-active">
                <router-view></router-view>
              </transition>
            </div>
          </el-main>
        <el-footer style="height: none; padding: 0">
          <page-footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import navMenu from '@/components/nav-menu'
const pageFooter = () => import('@/components/content-footer')
import menuHeaderSVG from '@/static/header.svg'

export default {
  name: 'main-container',
  data: () => ({menuHeaderSVG}),
  components: {navMenu, pageFooter}
}
</script>

<style scoped>
  .main-left-aside {
    background-color: #aaa;
  }

  .sit-icon {
    padding: 5px 0 5px 20px;

  }

  .sit-icon >>> i {
    font-size: 16px;
  }

  .body-container {
    width: 18.5rem;
    margin: 0 auto;
    border-radius: 5px;
    -webkit-transform: translateZ(0);
    -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  }

  .main-header {
    text-align: center;
    background-color: #fff;
  }

  .main-container {
    font-family: Arial, Helvetica, sans-serif;
  }

  .main-content {
    padding: 0 0.16rem;
  }

  .main-right-container {
    width: 15rem;
    padding: 0 0.2rem;
    min-height: 10rem;
  }

  .head-icon {
    display: inline-block;
    font-size:30px;
  }

  .main-right-container {
    background-color: #000;
  }

  .menu-header-logo >>> svg {
    height: 50px;
    padding: 5px 0;
  }

  .fade {
    opacity: 0
  }

  .fade-active {
    transition: opacity 0.3s ease-in;
    opacity: 0.9;
  }

  .main-div {
    opacity: 0.9;
  }

  * ::before ::after {
    box-sizing: inherit;
  }
</style>
