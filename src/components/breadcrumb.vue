<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" v-if="data && data.length > 0">
    <el-breadcrumb-item v-for="item in data" :to="getToObj(item)">{{ item.text }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: {
      data: {
        type: Array,
        required: false,
        default: []
      }
    },
    methods: {
      getToObj(item) {
        return item.path ? { path: item.path } : null;
      }
    }
  };
</script>

<style lang="postcss" scoped>
  @import 'palette.css';

  .el-breadcrumb {
    font-size: 18px;
    margin: 5px 0 20px;
  }

  .el-breadcrumb >>> .el-breadcrumb__inner {
    color: var(----color4);
  }

  .el-breadcrumb >>> .el-breadcrumb__inner.is-link {
    color: var(--color6);
  }
</style>
