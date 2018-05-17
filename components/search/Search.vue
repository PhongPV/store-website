<template>
  <div class="search-container">
    <b-row>
      <b-col
        md="8"
        sm="12"
        offset="2"
        class="search-wrap">
        <h2 class="text-search">Search</h2>
        <div class="input-container">
          <input
          class="input-search"
          type="text"
          placeholder="Search product by name or type">
          <img
            class="icon-search"
            src="/images/icon_search.png"
            alt="search-icon">
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="stylus">
.search-container
  background-color #565656
  diplay flex
  height 200px
.search-wrap
  margin-top 30px
  display: flex;
  flex-direction: column;
  margin-left: 25%;
.search-wrap
  .text-search
    color #fff
  .input-container
    display flex
    align-items center
    .input-search
      border-radius 3px
      width 70%
      height 35px
    .input-search::-webkit-input-placeholder
      font-size: 13px;
      line-height: 3;
      padding-left 5px
    .icon-search
      height 35px
      width 35px
      border-radius 3px
      margin-left 10px
    .icon-search:hover
      background-color #fff
</style>
