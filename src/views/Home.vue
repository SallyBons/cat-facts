<template>
  <div class="home">
    <h1>Cat's Facts</h1>
    <div class="cards-main-wrapper">
      <Card
        v-for="item in cardList"
        :info="item.text"
        :author="item.user"
        :likes="item.upvotes"
        :key="item.text"
      />
    </div>
    <div v-if="!this.isLastPage" v-on:click="showMore()" class="button-load-more">Load more</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  },
  computed: {
    ...mapState({
      page: state => state.page,
      info: state => state.info
    }),
    cardList: function() {
      return this.info
        ? this.info.slice(this.page * 8, (this.page + 1) * 8)
        : undefined;
    },
    isLastPage: function() {
      return this.info ? (this.page + 1) * 8 >= this.info.length : true;
    }
  },
  methods: {
    showMore: function() {
      this.$store.dispatch("pageIncrement");
    }
  }
};
</script>
<style scoped>
.cards-main-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
}
.button-load-more {
  max-width: 200px;
  width: 100%;
  background-color: #42b983;
  color: white;
  height: 35px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 25px;
}
.button-load-more:hover {
  border: 1px solid transparent;
  box-shadow: 0 4px 22px 0 rgba(66, 185, 131, 0);
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
