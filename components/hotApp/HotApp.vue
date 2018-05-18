<template>
  <b-container class="hot-app-container">
    <b-row class="hot-app-row">
      <h2 class="title-hot">Hot Apps</h2>
    </b-row>
    <b-row class="item">
      <b-col class="arrow-icon">
        <img
          src="/images/arrow-before.png"
          alt=""/>
      </b-col>
      <hot-app-item
        v-for="(item,id) in hotApp"
        :key="id"
        :image="item.image"
        :title="item.title"
        :rate="item.rate"
        :download="item.download"
        :price="item.price"
      />
      <b-col class="arrow-icon">
        <img
          src="/images/arrow-after.png"
          alt=""/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HotAppItem from './HotAppItem';
import hotApp from '../../constant/hotApp';

export default {
  components: {
    HotAppItem,
  },
  computed: {
    hotApp() {
      return hotApp;
    },
  },
};
</script>

<style lang="stylus">
.hot-app-container
  background-image url('/images/img-background.png')
  margin-bottom 30px
  padding-bottom 30px
  .item
    background-color rgba(216, 216, 216, 0.5)
  .arrow-icon
    display flex
    align-items center
    justify-content center
  .title-hot
    color: #fff
    margin-top 10px
    margin-left 35px
</style>
