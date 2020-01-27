<template>
  <el-container class="body-container">
    <el-container class="main-container">
      <el-header class="main-top-header">
        <router-link to="/" class="top-header-item">
          <img class="header-img" src="../../static/header.jpg"></img>
        </router-link>
        <header-menu class="top-header-item"></header-menu>
      </el-header>
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
import HeaderMenu from '@/components/header-menu'

export default {
  name: 'main-container',
  components: {
    navMenu,
    pageFooter,
    HeaderMenu
  },
  data: () => ({
    lang: localStorage.getItem('locale') || 'zh_cn',
    langOptions: [{
      key: 'zh_cn',
      text: '简体中文'
    }, {
      key: 'en',
      text: 'English'
    }]
  }),
  watch: {
    lang: function(value) {
      localStorage.setItem('locale', value)
      this.$i18n.locale = localStorage.getItem('locale')
    }
  },
  beforeCreate() {

  }
}
</script>

<style scoped>
  @import './main-container.css';
</style>
