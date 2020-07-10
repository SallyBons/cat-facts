<template>
  <div class="card-wrapper">
    <div
      class="img"
      v-if="this.isLoaded"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    />
    <Skeleton height="200px" v-else />
    <div class="content-wrapper" v-if="this.isLoaded">
      <div class="icons-wrapper">
        <p v-if="author">
          <img class="icon" src="../assets/user.svg" />
          {{ `${author.name.first} ${author.name.last}` }}
        </p>
        <p>
          <img class="icon" src="../assets/heart.svg" />
          {{ likes }}
        </p>
      </div>
      <p>{{ info }}</p>
    </div>
    <SkeletonTheme v-else>
      <div class="content-wrapper">
        <div class="skeleton-wrapper">
          <Skeleton height="18px" />
        </div>
        <div class="skeleton-wrapper">
          <Skeleton height="54px" />
        </div>
      </div>
    </SkeletonTheme>
  </div>
</template>

<script>
import axios from "axios";
import { Skeleton, SkeletonTheme } from "vue-loading-skeleton";

export default {
  name: "Card",
  props: {
    likes: Number,
    info: String,
    author: Object
  },
  components: {
    Skeleton,
    SkeletonTheme
  },
  data() {
    return {
      url: null,
      image: "",
      imageUrl: "",
      isLoaded: false
    };
  },
  watch: {
    image: function() {
      this.onImgLoad();
    }
  },
  computed: {
    cssProps() {
      return {
        "--background-image": `url(${this.url})`
      };
    }
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
    setImage() {
      //load picture in background
      this.imageUrl = this.url;
      this.image = "";

      var that;
      var highResImage = new Image();
      that = this;

      highResImage.onload = function() {
        that.image = that.imageUrl; // setting the attribute to image
      };
      highResImage.src = this.imageUrl; // loading the image
    }
  },
  created() {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(response => {
        this.url = response.data[0].url;
        return this.url;
      })
      .then(data => this.setImage(data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-wrapper {
  max-width: 300px;
  width: 100%;
  margin-bottom: 15px;
  min-height: 325px;
  -webkit-box-shadow: 0px 0px 25px 2px rgba(214, 214, 214, 0.4);
  -moz-box-shadow: 0px 0px 25px 2px rgba(214, 214, 214, 0.4);
  box-shadow: 0px 0px 25px 2px rgba(214, 214, 214, 0.4);
  border: 1px solid #f6f6f6;
  margin: 10px;
  box-sizing: content-box;
}

.card-wrapper .img {
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
  padding: 15px;
  box-sizing: border-box;
}
.content-wrapper p {
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.content-wrapper p:last-of-type {
  margin-bottom: 0px;
}

.skeleton-wrapper {
  margin-bottom: 10px;
}
.icons-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.icon {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
