<template>
  <el-container>
    <el-header class="main-header">
      <div>
        <router-link to="/">
          <i class="menu-header-logo" v-html="menuHeaderSVG"/>
        </router-link>
      </div>
    </el-header>
    <el-container class="main-container">
      <el-aside width='250px' style="overflow: hidden" class="main-left-aside">
        <nav-menu />
      </el-aside>
      <el-container class="main-right-container">
        <transition appear appear-class="fade" appear-to-class="fade-active">
          <el-main style="padding: 0">
            <div class="main-div">
              <router-view></router-view>
            </div>
          </el-main>
        </transition>
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

  .main-content .content-sub-header {
    color: white;
  }

  .main-content .content-sub-div {
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    font-weight: 150;
    color: lightgrey;
  }

  .main-right-container {
    width: calc(100%-250px);
  }

  .content-resources li {
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    font-weight: 150;
    color: white;
  }

  .content-resources a:link {
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    font-weight: 100;
    color: blue;
    text-decoration: none;
  }

  .content-resources a:visited {
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    font-weight: 100;
    color: red;
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


