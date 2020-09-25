<template>
  <div class="features">
    <h2 class="con-tit">{{ "vuetify features".toUpperCase() }}</h2>
    <v-divider class="line"></v-divider>
    <v-divider class="line"></v-divider>
    <div class="wrapper">
      <FeatureItem
        v-for="(feature, i) in features"
        :key="i"
        :icon="feature.icon"
        :title="feature.title"
        :text="feature.text"
        class="flex-item"
      ></FeatureItem>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature",
  components: {
    FeatureItem: () => import("@/components/main/FeatureItem.vue")
  },
  data() {
    return {
      features: [
        {
          icon: "mdi-account-music",
          title: "VIBRANT COMMUNITY",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-camera-wireless-outline",
          title: "FREQUENT UPDATES",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-cloud",
          title: "LONG-TERM SUPPORT",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ] // 배열 안에 객체 세 개
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.features {
  padding: 20px;
  background-color: #eee;
  padding: 115px 50px;
}
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 50px;
}
.flex-item {
  width: 31.5;
  margin: 0 10px;
}

@media only screen and(max-width:768px) {
  .wrapper {
    flex-flow: column nowrap;
  }
  .flex-item {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
