<template>
  <div class="home">
    <h1>Cat's Facts</h1>
    <div class="cards-main-wrapper">
      <Card
        v-for="item in content"
        :info="item.text"
        :author="item.user"
        :likes="item.upvotes"
        :key="item.text"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    content: function() {
      return this.$store.state.info;
    },
  },
};
</script>
<style scoped>
.cards-main-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
