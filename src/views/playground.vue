<template>
  <div class="playground">
    <h2>메시지 : {{msg}}</h2>
    <div v-html="msg"></div>
    <!-- v-html로 불러온 문서취급이라 scoped가 적용된 css는 먹히지 않는다 -->
    <p>{{title}}</p>
    <div id="demo">{{ fullName }}</div>
    <br />
    <!-- v-bind: 는 그냥 :만 써도된다(축약어) -->
    <div :class="{ active: isActive }" class="text-danger">클래스 바인딩</div>
    <div v-bind:class="{ active: !isActive }">클래스 바인딩</div>
    <div :class="[isActive? 'active':'', 'text-danger']">클래스 바인딩</div>
    <!-- 삼항연산자 [조건문? true : false] 위의 경우 isActive가 true면
    클래스에 active가 활성화되고 false면 공백(클래스없음)이 적용된다-->
    <div :class="[{active : isActive}, 'text-danger']">클래스 바인딩</div>
    <div :style="{color : 'red', fontWeight:'bold', fontSize:size+'px'}">인라인 스타일 바인딩</div>
    <!-- 좌항(ex:color)은 문자열이던 아니던 상관없지만 우항(ex:'red')은 반드시 문자열이어야 한다-->
    <div :style="fontStyle">인라인 스타일 바인딩</div>
    <!-- {}안은 객체이므로 위와 같이 지정할 수도 있다. 이 경우 객체 안의 값은 객체내에서 정의되어야 한다. -->
  </div>
</template>

<script>
export default {
  name: "playground",
  components: {},
  data() {
    return {
      msg: "<p>안녕하세요</p>",
      title: "안녕하세요 vue.js입니다!",
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      isActive: true,
      "text-danger": false,
      fontStyle: { color: "red", fontWeight: "bold", fontSize: "20px" },
      size: 20
    };
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  },

  methods: {}
  //관습적으로 사용되는 beforeMount, mounted, updated, destroyed
};
</script>


<style lang="scss" scoped>
p {
  color: rosybrown;
}
.active {
  font-size: 30px;
  color: royalblue;
}
.text-danger {
  border: 1px solid darkcyan;
}
</style>
