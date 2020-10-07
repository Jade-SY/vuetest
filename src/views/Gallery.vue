<template>
  <div class="gallery">
    <v-row no-gutters>
      <v-col v-for="(image, i) in images" :key="i" cols="4">
        <gallery-item :url="image.download_url"> </gallery-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Gallery",
  components: {
    GalleryItem: () => import("@/components/gallery/GalleryItem.vue")
  },
  data() {
    return {};
  },

  computed: { ...mapState(["images"]) },
  methods: {},
  beforeMount() {
    this.$http.get("https://picsum.photos/v2/list").then(images => {
      console.log(images);
      let parsedImage = images.data.map(el => {
        let tmpArr = el.download_url.split("/");
        tmpArr.splice(-2, 2, "500/350.webp");
        el.download_url = tmpArr.join("/");
        return el;
      });
      this.$store.commit("setImages", parsedImage);
    });
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 136px);
  margin: 0;
  padding: 0;
}
</style>
