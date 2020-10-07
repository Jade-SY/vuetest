<template>
  <div class="gallery-item">
    <v-img :src="url" aspect-ratio="1.7"> </v-img>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// .img-box {
//   width: 25%;
//   float: left;
//   text-align: center;
// }
// .txt-box {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 3;
//   opacity: 0;
// }
// .hover-shade {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #f09f54;
//   opacity: 0;
// }
// .img-box:hover .hover-shade {
//   opacity: 0.9;
//   transition: all 0.3s;
// }
// .img-box:hover .txt-box {
//   opacity: 1;
//   transition: all 0.3s;
// }
// @media screen and(max-width: 1263px) {
//   .img-box {
//     width: 33.33333%;
//   }
// }
// @media screen and(max-width: 956px) {
//   .img-box {
//     width: 50%;
//   }
// }
// @media screen and(max-width: 768px) {
//   .img-box {
//     width: 100%;
//   }
// }
</style>
