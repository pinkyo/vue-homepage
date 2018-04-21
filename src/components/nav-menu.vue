<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#"
      router
      >
      <el-submenu index="1">
        <template slot="title">
          <div>
            <i class="fas fa-th-list"></i>
            <span v-t="'navigator.resources.title'"></span>
          </div>
        </template>
        <el-menu-item-group :title="$t('navigator.resources.frontend.javascript.title')">
          <el-menu-item index="/frontend/react">
            <i class="fab fa-react"></i>
            <span v-t="'navigator.resources.frontend.react'"></span>
          </el-menu-item>
          <el-menu-item index="/frontend/vue">
            <i class="fab fa-vuejs"></i>
            <span v-t="'navigator.resources.frontend.vue'"></span>
          </el-menu-item>
          <el-menu-item index="/frontend/angular">
            <i class="fab fa-angular"></i>
            <span v-t="'navigator.resources.frontend.angular'"></span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group :title="$t('navigator.resources.backend.title')">
          <el-menu-item index="/backend/java">
            <i v-html="javaSvg" class="java-icon"/>
            <span v-t="'navigator.resources.backend.java'"></span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/author">
        <i class="fas fa-user-circle"></i>
        <span v-t="'navigator.author'"></span>
      </el-menu-item>
      <el-menu-item index="/about">
        <i class="fas fa-info-circle"></i>
        <span v-t="'navigator.about'"></span>
      </el-menu-item>
    </el-menu>
</template>

<script>
import javaSvg from '@/static/java.svg'

export default {
  name: "nav-menu",
  data: () => ({javaSvg}),
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

.el-menu-vertical {
  height: 100%;
  width: 100%;
}

.el-menu-item * {
  font-size: 1.2rem;
}

.el-submenu__title * {
  font-size: 1.2rem;
}

.java-icon svg {
  height: 1rem;
  width: 1rem;
  background-color: white;
  border-radius: 4px;
  margin-bottom: .3rem;
}

</style>

