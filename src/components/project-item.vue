<template>
  <li class="project-list-item">
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
    font-size: 20px;
    font-weight: normal;
    color: white;
    padding: 0.03rem 0;
    margin: 0.03rem 0;
    list-style-type: none;
  }

  li.project-list-item:hover {
    color: lightblue;
  }

  li.project-list-item::before {
    content: '>> ';
    color: white;
    padding-right: 0.06rem;
    font-weight: bolder;
  }

  li.project-list-item:hover::before {
    color: lightblue;
  }

  li.project-list-item:hover {
    background-color: #777;
    border-radius: 0.03rem;
    box-shadow: 0 0 0.16rem #777;
    font-size: 20px;
    width: fit-content;
    transition: box-shadow .6s 0 ease-in;
    transition: font-size .6s 0 ease-in;
  }

  li.project-list-item a:link {
    font-size: 20px;
    font-weight: normal;
    color: brown;
    text-decoration: none;
  }

  li.project-list-item a:visited {
    font-size: 20px;
    font-weight: normal;
    color: brown;
    text-decoration: none;
  }

</style>
