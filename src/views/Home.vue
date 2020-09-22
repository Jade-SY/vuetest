<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{msg}}</h1>
    <div id="app-2">
      <p v-bind:title="upload">
        내 위에 잠시 마우스를 올리면
        <span style="color: red">동적</span>으로 바인딩 된 title을 볼 수 있습니다!
      </p>
      <p v-if="seen">이제 나를 볼 수 있어요</p>
      <ol>
        <li v-for="(todo, i) in todos" v-bind:key="i">{{ todo.text }}</li>
        <!-- i는 index를 의미 -->
      </ol>
      <!-- v-bind:key는 for문의 필수요소로 식별자를 의미한다.
      for는 반복문이므로 식별자가 없으면 html에 계속 같은 것이 들어온다고 인식됨.->오류
      이를 막기위해 v-bind:key를 사용한다.
      v-for와v-bind:key는 반드시 세트로 묶어서 사용-->
      <!-- v-bind:key="i"에서 i는 index -->
      <p>{{message}}</p>
      <input v-model="message" />
      <!-- v-model:실시간으로 반영하여 값을 수정.message의 초기값은 "안녕하세요! Vue.js!"이지만
      실제 웹페이지에서 입력하는대로 바뀌게 된다.-->
      <button class="reverse" v-on:click="reverseMessage">메시지 뒤집기</button>
      <!-- components에 입력한 문서명을 태그로 사용하여 임포트 -->
      <HelloWorld></HelloWorld>
      <About></About>
      <Event :pageH1="eventH1"></Event>
      <Event :pageH1="'이건 H2'"></Event>
      <!-- components에 입력한 문서명을 태그로 사용하여 임포트 -->
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import About from "@/views/About.vue";
import Event from "@/views/Event.vue";
// 불러올 문서를 import
export default {
  name: "Home",
  components: { HelloWorld, About, Event }, //불러올 문서명 입력. 콤마로 구분하여 여러 문서를 불러올 수 있다.
  data() {
    return {
      msg: "안녕하세요",
      upload: "이 페이지는 " + new Date() + " 에 로드 되었습니다",
      message: "안녕하세요! Vue.js!",
      seen: true,
      todos: [
        { text: "JavaScript 배우기" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" }
      ],
      eventH1: "이건 event"
    };
  },
  methods: {
    //같은기능을 수행하는 단위체=객체(object).여기서 '같은기능'이 method를 의미한다.
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style lang="scss">
.reverse {
  width: 100px;
  height: 30px;
  background: #35495e;
  color: #fff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
