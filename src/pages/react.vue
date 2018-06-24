<template>
  <div class="react-content main-content">
    <content-header text="React" />
    <p class="header-description">A JavaScript library for building user interfaces</p>
    <div class="content-resources">
      <ul>
        <li><a href="https://github.com/pinkyo/validatorjs" target="_blank">ValidatorJs</a>: Central validator to provide validation solution when developing using ES 6+</li>
      </ul>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/content-header'

export default {
  name: 'react-content',
  components: {contentHeader}
}
</script>

<style>
  .react-content {
    min-height: 43rem;
    background-color: #282c34;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: 95% 1rem;
    background-size: 15% auto;
    position: relative;
  }

  .react-content .header-description {
    padding: 0;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: white;
    font-style: normal;
  }
</style>

