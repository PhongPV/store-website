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
        <span>Rate: </span>
        <img
          class="image-star"
          src="/images/star.png"
          alt=""/>
      </div>
      <p class="download-text">Download: {{download}} Tr</p>
      <p>Price: <span class="price-text">{{price}}$</span></p>
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
  margin 10px 0
  .item-wrap
    border 1px solid grey
    padding-top 10px
    .title
      margin-top 30px
    .price-text
      color #ff8e00
      margin-right 25px
    .download-text
      font-size 15px
      margin-right 15px
    .rate-container
      margin 15px 15px
      font-size 15px
      display flex
      align-items center
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
        background-color #fdfdfd
        width 80px
        height 30px
        font-size 13px
        font-weight 700
        margin 5px 2px
        .info-text
          color #000
        .install-text
          color #0036e8

</style>
