<template>
  <li class="project-list-item">
    <font-awesome-icon icon="angle-double-right" />
    <a :href="this.href" target="_blank">{{name}}</a>: {{description}}
  </li>
</template>

<script>
export default {
  name: 'project-item',
  props: ['href', 'name', 'description']
}
</script>

<style>
  li.project-list-item {
    font-weight: normal;
    font-size: 20px;
    /* color: white; */
    padding: 3px 0;
    margin: 3px 0;
    list-style-type: none;
  }

  li.project-list-item:hover {
    /* color: lightblue; */
  }

  li.project-list-item:hover::before {
    /* color: lightblue; */
  }

  li.project-list-item:hover {
    /* background-color: #777; */
    border-radius: 3px;
    /* box-shadow: 0 0 16px #777; */
    width: fit-content;
    transition: box-shadow .6s 0 ease-in;
    transition: font-size .6s 0 ease-in;
  }

  li.project-list-item a:link {
    font-weight: normal;
    color: #4a90e2;
    text-decoration: none;
  }

  li.project-list-item a:visited {
    font-weight: normal;
    color: #4a90e2;
    text-decoration: none;
  }

</style>
