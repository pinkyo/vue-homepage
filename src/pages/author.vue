<template>
  <div class="author-content main-content">
    <content-header text="Author" />
    <div class="resources">
      <div><h2>Who Am I ?</h2></div>
      <div>
        <div class="author-pic-div"><img src="../static/author.jpg" ></div>
        <span>
          Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase "lorem ipsum" can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import contentHeader from '@/components/content-header'

export default {
  name: 'author-content',
  components: {contentHeader}
}
</script>

<style>

.author-pic-div {
  float: left;
  padding-right: 1rem;
}

.author-pic-div img {
  border-radius: 4rem;
  width: 8rem;
  height: 8rem;
  box-shadow: 2rem 0 0;
  box-shadow: 0 0 2rem black;
}

</style>

