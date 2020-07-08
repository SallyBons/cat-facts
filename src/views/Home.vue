<template>
  <div class="home">
    <h1>Cat's Facts</h1>
    <div class="cards-main-wrapper" v-if="content">
      <Card
        v-for="item in content.slice(0, 8)"
        :info="item.text"
        :author="item.user"
        :likes="item.upvotes"
        :key="item.text"
      />
    </div>
    <div class="button-load-more" v-on:click="handler(8)">Load more</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  },
  computed: {
    content: function() {
      return this.$store.state.info;
    }
  },
  methods: {
    handler: function(count) {
      return this.$store.state.info.splice(0, 8 + count);
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
