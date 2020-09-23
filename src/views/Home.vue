<template>
  <div>
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <core-footer></core-footer>
    <!-- html은 케밥케이스가 원칙.
    AppBar가 명칭이지만 케밥케이스로 작성해도 정상적으로 읽힌다-->
  </div>
</template>

<script>
// 불러올 문서를 import하거나 아래export에 함수로. 함수를 쓰면 비동기식으로 불러오므로
// 로딩시간을 줄일수있다

export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreView: () => import("@/components/core/View.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue")
  }, //불러올 문서명 입력. 콤마로 구분하여 여러 문서를 불러올 수 있다.
  data() {
    return {};
  },
  methods: {
    //같은기능을 수행하는 단위체=객체(object).여기서 '같은기능'이 method를 의미한다.
  }
};
</script>
<style lang="scss" scoped>
</style>
