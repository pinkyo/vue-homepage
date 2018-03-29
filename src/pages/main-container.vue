<template>
  <el-container>
    <el-header class="main-header">
      <h1>My Home Page</h1>
    </el-header>
    <el-container class="main-container">
      <el-aside width='250px' style="overflow: hidden" class="main-left-aside">
        <nav-menu />
      </el-aside>
      <el-container class="main-right-container">
        <transition name="el-fade-in">
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

export default {
  name: 'main-container',
  components: {navMenu, pageFooter}
}
</script>

<style>
  .main-header {
    text-align: center;
    background-color: #878D99;
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

  .main-header h1 {
    color: rgb(112, 56, 33);
    font-style: italic;
    text-shadow: 0 0 5px white;
  }

  .main-content {
    padding: 0 1rem;
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
    background-color: silver;
  }

  * ::before ::after {
    box-sizing: inherit;
  }

  .resource_item_content  {
    font-size: 1.2rem;
    word-spacing: 0.1rem;
    font-weight: 100;
    color: darkolivegreen;
  }
</style>


