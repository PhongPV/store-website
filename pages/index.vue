<template>
  <div class="root-container">
    <Header />
    <search />
    <top-app />
    <hot-app />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header';
import Search from '~/components/search/Search';
import TopApp from '~/components/topApp/TopApp';
import HotApp from '~/components/hotApp/HotApp';
import Footer from '~/components/footer/Footer';

export default {
  components: {
    Header,
    Search,
    TopApp,
    HotApp,
    Footer,
  },
};
</script>

<style>
.root-container {
  background-color: #fff;
}
</style>
