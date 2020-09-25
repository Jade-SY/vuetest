<template>
  <!-- <div class="parallax">
    <v-parallax :src="bg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" md="3">
          <h1 class="tit">24k</h1>
          <h4 class="subheading">GITHUB STARS</h4>
        </v-col>
        <v-col class="text-center" cols="12" md="3">
          <h1 class="tit">330+</h1>
          <h4 class="subheading">GITHUB STARS</h4>
        </v-col>
        <v-col class="text-center" cols="12" md="3">
          <h1 class="tit">1m</h1>
          <h4 class="subheading">GITHUB STARS</h4>
        </v-col>
        <v-col class="text-center" cols="12" md="3">
          <h1 class="tit">5m</h1>
          <h4 class="subheading">GITHUB STARS</h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div> -->
  <div class="parallax-view">
    <!-- <h1>Parallax</h1> -->
    <v-parallax :src="bgimg" :height="isMobile ? 800 : 500">
      <!-- 삼항연산자 조건? true : false -->
      <div class="inner-parallax">
        <div class="container">
          <div class="spec" v-for="(spec, i) in specs" :key="i">
            <div class="value-text">{{ spec.value }}</div>
            <div class="title-text">{{ spec.title }}</div>
          </div>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Parallax",
  components: {},
  data() {
    return {
      bgimg:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      specs: [
        { value: "24k", title: "GITHUB STARS" },
        { value: "330+", title: "releases" },
        { value: "1m", title: "download/mo" },
        { value: "5m", title: "total download" }
      ],
      isMobile: false
    };
  },
  mounted() {
    let onresize = () => {
      let width = document.body.clientWidth; // DOM(문서객체모델) = document, window
      console.log(width);
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize);
    // document.addEventListener("resize", onresize);도 위와 동일하다.
    //"resize"는 이미 지정된 값. "click"이라고 할 경우 화면을 클릭했을때 실행되는식
    //addEventListener(이벤트핸들러)는 연속적인 동작이므로 연산량 과다를 막기위해
    // 한 페이지에 표시되는 문서당 2~3개가 적당.
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
// .v-parallax {
//   height: 500px;
// }
// @media only screen and(max-width:960) {
//   .v-parallax {
//     height: 700px;
//   }
// }
// .tit {
//   font-size: 3.75rem;
//   font-weight: 900;
// }
// .subheading {
//   font-size: 1.2rem;
//   font-weight: 400;
// }

.inner-parallax {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  .spec {
    margin: 0 20px;
    width: 300px;
  }
  .value-text {
    font-size: 5rem;
    font-weight: bold;
  }
  .title-text {
    font-size: 2rem;
  }
}
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
}
@media only screen and(max-width:880px) {
  .container {
    flex-flow: column;
    align-items: center;
  }
}
</style>
