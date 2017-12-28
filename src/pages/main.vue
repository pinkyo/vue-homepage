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
        <el-main>
          <!-- <router-link to="/home">home</router-link>
          <router-link to="/about">about</router-link> -->
          <div class="main-div" :class="{hidden: hidden}" @click="handleClick">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer height='2rem'></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import navMenu from '@/components/nav-menu'

export default {
  name: 'main',
  components: {navMenu},
  computed: mapGetters({
    hidden: 'isHidden'
  }),
  methods: {
    handleClick() {
      if (this.hidden)
        this.$store.dispatch('show')
      else this.$store.dispatch('hide')
    }
  }
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
    color: blue;
    text-shadow: 0 0 5px white;
  }

  .main-right-container {
    background-color: silver;
  }
</style>


