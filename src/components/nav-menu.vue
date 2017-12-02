<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <div>
            <i class="el-icon-menu"></i>
            <span v-t="'navigator.resources.title'"></span>
          </div>
        </template>
        <el-menu-item-group :title="$t('navigator.resources.frontend.title')">
          <el-menu-item index="1-1" v-t="'navigator.resources.frontend.react'"></el-menu-item>
          <el-menu-item index="1-2" v-t="'navigator.resources.frontend.vue'"></el-menu-item>
          <el-menu-item index="1-3" v-t="'navigator.resources.frontend.angular'"></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group :title="$t('navigator.resources.backend.title')">
          <el-menu-item index="1-4" v-t="'navigator.resources.backend.java'"></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-star-on"></i>
        <span v-t="'navigator.author'"></span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-info"></i>
        <span v-t="'navigator.about'"></span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: "nav-menu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

.el-menu-vertical-demo {
  height: 100%;
  width: 100%;
}

</style>

