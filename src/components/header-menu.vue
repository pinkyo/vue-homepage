<template>
  <div class="header-menu-list">
    <el-dropdown class="menu-item" @command="handleRouteChange">
      <span class="el-dropdown-link">
        {{ $t('navigator.resources.frontend.title') }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="menu-item-popover">
        <el-dropdown-item icon="el-icon-plus" command="/frontend/react">
          <font-awesome-icon :icon="['fab', 'react']"></font-awesome-icon>
          <span class="dropdown-item">REACT JS</span>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus" command="/frontend/vue">
          <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
          <span class="dropdown-item">VUE JS</span>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline" command="/frontend/angular">
          <font-awesome-icon :icon="['fab', 'angular']"></font-awesome-icon>
          <span class="dropdown-item">AngularJS JS</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="menu-item" @command="handleRouteChange">
      <span class="el-dropdown-link"> {{ $t('navigator.resources.backend.title') }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
      <el-dropdown-menu slot="dropdown" class="menu-item-popover">
        <el-dropdown-item icon="el-icon-plus" command="/backend/java">
          <font-awesome-icon :icon="['fab', 'java']" />
          <span class="dropdown-item">JAVA</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <router-link class="menu-item" to="/author">{{ $t('navigator.author') }}</router-link>
    <router-link class="menu-item" to="/about">{{ $t('navigator.about') }}</router-link>
    <router-link class="menu-item" to="/color">{{ $t('navigator.color') }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'header-menu',
    methods: {
      handleRouteChange(command) {
        if (command) this.$router.push(command);
      }
    }
  };
</script>

<style scoped>
  .header-menu-list > .menu-item {
    margin-right: 40px;
    text-decoration: none;
    font-size: 18px;
    color: var(--color1);
  }

  .el-dropdown-menu.menu-item-popover >>> .el-dropdown-menu__item {
    text-decoration: none;
    font-size: 18px;
    color: var(--color1);
  }

  .el-dropdown-menu.menu-item-popover >>> span.dropdown-item {
    text-decoration: none;
    font-size: 18px;
    color: var(--color1);
    margin-left: 10px;
  }
</style>
