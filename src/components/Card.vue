<template>
  <div class="card-wrapper">
    <img :src="url" alt="oops" />
    <div class="content-wrapper">
      <p v-if="author">By {{ `${author.name.first} ${author.name.last}` }}</p>
      <p>Likes: {{ likes }}</p>
      <p>Fact: {{ info }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  props: {
    likes: Number,
    info: String,
    author: Object,
  },
  data() {
    return {
      url: null,
    };
  },
  mounted() {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => (this.url = response.data[0].url));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
img {
  max-width: 300px;
  width: 100%;
  max-height: 250px;
  height: 100%;
}
.card-wrapper {
  max-width: 300px;
  width: 100%;
  border: 1px solid gray;
  margin-bottom: 15px;
  min-height: 400px;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
}
p {
  text-align: left;
}
</style>
