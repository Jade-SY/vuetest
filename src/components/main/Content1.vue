<template>
  <section class="content1">
    <!-- <v-img :src"require('../../assets/visual.jpg')" min-height="calc(100vh - 100px)"></v-img> -->
    <p class="tit-first">{{mainCopy1}}</p>
    <p class="tit-second">{{mainCopy2}}</p>
    <v-btn class="down-vtn">
      <span></span>
    </v-btn>
  </section>
</template>

<script>
export default {
  name: "content1",
  components: {},
  data() {
    return {
      mainCopy1: "welcome to",
      mainCopy2: "vuetify"
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.content1 {
  width: 100%;
  min-height: calc(100vh - 100px);
  background: url("../../assets/visual.jpg") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  color: #fff;
  line-height: 0.8em;
  text-transform: uppercase;
}
.tit-first {
  font-size: 3em;
  font-weight: 300;
}
.tit-second {
  font-size: 6em;
  font-weight: 900;
}
.down-vtn {
}
.v-btn:not(.v-btn--round).v-size--default {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: rgba(255, 255, 255, 0.274);
}
</style>
