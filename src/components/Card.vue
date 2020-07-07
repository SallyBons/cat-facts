<template>
  <div class="card-wrapper">
    <div :style="cssProps" />
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
    author: Object
  },
  data() {
    return {
      url: null
    };
  },
  computed: {
    cssProps() {
      return {
        "--background-image": `url(${this.url})`
      };
    }
  },
  mounted() {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(response => (this.url = response.data[0].url));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-wrapper {
  max-width: 300px;
  width: 100%;
  border: 1px solid gray;
  margin-bottom: 15px;
  min-height: 408px;
}

.card-wrapper div {
  background-image: var(--background-image);
  max-width: 300px;
  width: 100%;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
}
p {
  text-align: left;
}
</style>
