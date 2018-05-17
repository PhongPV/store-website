<template>
  <b-container>
    <b-row>
      <top-app-item
        v-for="(item,id) in topApp"
        :key="id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :rate="item.rate"
        :download="item.download"
        :price="item.price"
      />
    </b-row>
  </b-container>
</template>

<script>
import TopAppItem from './TopAppItem';
import topApp from '../../constant/topApp';

export default {
  components: {
    TopAppItem,
  },
  computed: {
    topApp() {
      return topApp;
    },
  },
};
</script>
