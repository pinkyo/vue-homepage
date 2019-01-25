<template>
  <el-container class="body-container">
    <el-container class="main-container">
      <el-aside width='3rem' style="overflow: hidden" class="main-left-aside">
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
  @import './main-container.css';
</style>
