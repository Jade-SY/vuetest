<template>
  <div class="gallery">
    <v-row no-gutters>
      <v-col
        v-for="(image, i) in images"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <gallery-item :url="image.download_url" :author="image.author">
        </gallery-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Gallery',
  components: {
    GalleryItem: () => import('@/components/gallery/GalleryItem.vue'),
  },
  data() {
    return {};
  },

  computed: { ...mapState(['images']) },
  methods: {},
  beforeMount() {
    //if (this.images.length <= 0) : 이미지가 없을 때만 데이터를 불러옴.
    //images.length(배열의 길이. 즉, 포함하고 있는 이미지의 갯수)가
    //0보다 작거나 같다 = 이미지가 없다
    if (this.images.length <= 0) {
      this.$http.get('https://picsum.photos/v2/list').then((images) => {
        console.log(images);
        let parsedImage = images.data.map((el) => {
          let tmpArr = el.download_url.split('/');
          tmpArr.splice(-2, 2, '300/200.webp');
          el.download_url = tmpArr.join('/');
          return el;
        });
        this.$store.commit('setImages', parsedImage);
        //this.$store(vuex스토어)에서 setImages mutation을 호출
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 136px);
  margin: 0;
  padding: 0;
}
</style>
