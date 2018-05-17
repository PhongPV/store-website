<template>
  <b-col
    md="4"
    sm="12"
    class="item-container text-center">
    <div class="item-top-wrap">
      <img
      :src="image"
      alt="top-app">
      <h4 class="title">{{title}}</h4>
      <span class="description">{{description}}</span>
      <div class="rate-container">
        <span>Rate: </span>
        <img
          class="image-star"
          src="/images/star.png"
          alt=""/>
      </div>
      <div class="info-container">
        <p>Download: {{download}} Tr</p>
        <p>Price: <span class="price">{{price}}$</span></p>
      </div>
      <div class="button-container">
        <div class="button">
          <span class="info-text">More Info</span>
        </div>
        <div class="button">
          <span class="install-text">Install</span>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    download: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.item-container
  margin 30px 0
  padding 50px 10px
  .item-top-wrap
    border 1px solid grey
    padding 20px 30px
    .title
      margin-top 30px;
    .description
      margin-top 15px
    .rate-container
      margin 15px 0
      display flex
      align-items center
      .image-star
        margin-left 10px
    .info-container
      display flex
      margin-bottom  30px;
      justify-content: space-between;
      .price
        color #0036e8
        font-weight 700
    .button-container
      display flex
      justify-content: space-around;
      .button
        display flex
        align-items center
        justify-content center
        background-color #d8d8d8
        width 100px
        height 30px
        .info-text
         color #000
         font-weight 700
        .install-text
         color #0036e8
         font-weight 700
</style>
