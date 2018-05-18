<template>
  <b-col
    md="2"
    sm="12"
    class="item-hot-container text-center">
    <div class="item-wrap">
      <img
      :src="image"
      alt="top-app">
      <h4 class="title">{{title}}</h4>
      <div class="rate-container">
        <span class="rate-text">Rate: </span>
        <img
          class="image-star"
          src="/images/star.png"
          alt=""/>
      </div>
      <p class="download-text">Download: {{download}} Tr</p>
      <p class="price-text">Price: <span class="price-num-text">{{price}}$</span></p>
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
.item-hot-container
  margin 10px 5px
  background-color #252525
  .item-wrap
    padding-top 10px
    .title
      margin-top 30px
      color #fff
    .price-num-text
      color #ff8e00
      margin-right 25px
    .price-text
      color #fff
    .download-text
      color #fff
      font-size 15px
      margin-right 15px
    .rate-container
      margin 15px 15px
      font-size 15px
      display flex
      align-items center
      .rate-text
        color #fff
      .image-star
        margin-left 10px
    .info-container
      display flex
      margin 0 15px
      justify-content: space-between;
    .button-container
      display flex
      justify-content: space-around;
      .button
        display flex
        align-items center
        justify-content center
        background-color #252525
        border 1px solid grey
        width 100px
        height 30px
        font-size 13px
        font-weight 700
        margin 5px 3px
        .info-text
          color #fff
        .install-text
          color #fff
</style>
