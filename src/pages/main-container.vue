<template>
  <el-container>
    <el-header class="main-header">
      <div>
        <router-link to="/" title="Home">
          <i class="menu-header-logo" v-html="menuHeaderSVG"/>
        </router-link>
      </div>
    </el-header>
    <el-container class="main-container">
      <el-aside width='250px' style="overflow: hidden" class="main-left-aside">
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
import pageFooter from '@/components/content-footer'
import menuHeaderSVG from '@/static/header.svg'

export default {
  name: 'main-container',
  data: () => ({menuHeaderSVG}),
  components: {navMenu, pageFooter}
}
</script>

<style>
  .main-header {
    text-align: center;
    background-color: lightgray;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .main-container {
    min-height: 43rem;
    font-family: Rubik;
  }

  .main-left-aside {
    border-bottom-left-radius: 4px;
  }

  .main-right-container {
    border-bottom-right-radius: 4px;
  }

  .main-content {
    padding: 0 1rem;
  }

  .main-content .content-header {
    color: lightblue;
  }

  .main-content .content-sub-header h2 {
    color: white;
    font-family: 'Rubik';
    font-weight: 500;
    line-height: 1rem;
  }

  .main-content .content-sub-div {
    font-size: 1.3rem;
    font-weight: 400;
    color: lightgrey;
    font-family: 'Rubik'
  }

  .main-right-container {
    width: calc(100%-250px);
  }

  .content-resources li {
    font-size: 1.4rem;
    font-weight: normal;
    color: white;
  }

  .content-resources a:link {
    font-size: 1.4rem;
    font-weight: normal;
    color: brown;
    text-decoration: none;
  }

  .content-resources a:visited {
    font-size: 1.4rem;
    font-weight: normal;
    color: brown;
    text-decoration: none;
  }

  .head-icon {
    display: inline-block;
    font-size:3em;
  }

  .main-right-container {
    background-color: #282c34;
  }

  .menu-header-logo svg {
    height: 3.5rem;
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


