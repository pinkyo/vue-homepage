<template>
  <el-menu
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    background-color="#aaa"
    text-color="#000"
    active-text-color="#039"
    :default-active="getDefaultActiveItem()"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <div>
          <font-awesome-icon icon="th-list" />
          <span v-t="'navigator.resources.title'"></span>
        </div>
      </template>
      <el-menu-item-group :title="$t('navigator.resources.frontend.title')">
        <el-menu-item index="/frontend/react">
          <font-awesome-icon :icon="['fab', 'react']" />
          <span>ReactJS</span>
        </el-menu-item>
        <el-menu-item index="/frontend/vue">
          <font-awesome-icon :icon="['fab', 'vuejs']" />
          <span>VueJS</span>
        </el-menu-item>
        <el-menu-item index="/frontend/angular">
          <font-awesome-icon :icon="['fab', 'angular']" />
          <span>AngularJS</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group :title="$t('navigator.resources.backend.title')">
        <el-menu-item index="/backend/java">
          <font-awesome-icon :icon="['fab', 'java']" />
          <span>JAVA</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/author">
      <font-awesome-icon icon="user-circle" />
      <span v-t="'navigator.author'"></span>
    </el-menu-item>
    <el-menu-item index="/about">
      <font-awesome-icon icon="info-circle" />
      <span v-t="'navigator.about'"></span>
    </el-menu-item>
    <el-menu-item index="/color">
      <font-awesome-icon icon="info-circle" />
      <span v-t="'navigator.color'"></span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'nav-menu',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getDefaultActiveItem() {
        return this.$router.currentRoute.fullPath;
      }
    }
  };
</script>

<style>
  .el-menu-item * {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .el-menu-item.is-active * {
    font-weight: bold;
  }

  .el-submenu__title * {
    font-weight: 500;
  }

  .el-menu-item-group__title {
    font-weight: 500;
  }

  .el-menu-item:hover span {
    padding: 20px;
    font-style: italic;
    transition: padding 0.4s 0s ease-in;
    transition: font-style 0.4s 0s ease-in;
  }

  .el-menu {
    border: none;
  }
</style>
