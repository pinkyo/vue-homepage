<template>
  <div class="react-content">
    <content-header text="React" />
    <p class="header-description">A JavaScript library for building user interfaces</p>
    <div class="resources">
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
    position: relative;
  }

  .react-content .content-header {
    color: #61dafb;
  }

  .react-content .header-description {
    padding: 0;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0.01em;
    font-weight: 200;
    color: #ffffff;
    font-style: normal;
  }

  .react-content::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: 100% 100px;
    background-size: 30% auto;
    opacity: 0.05;
  }
</style>

