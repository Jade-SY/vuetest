<template>
  <div class="event">
    <h1>Event Page</h1>
    <h1>Event : {{ pageH1 }}</h1>
    <!-- {{}}안은  props와 동일하게 작성 -->
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 {{ counter }}번 입니다.</p>
    <button @click="greet">Greet</button>
    <button @click="greet()">Greet</button>
    <!-- ()객체를 넘겨주겠다고 선언했는데 빈칸이므로 event에 해당하는 함수가 실행되지 않음 -->
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click.ctrl="say('what')">Say what</button>
    <div @click.ctrl="doSomething">Do something</div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: ["pageH1"],
  components: {},
  data() {
    return {
      counter: 0,
      name: "vue.js"
    };
  },
  methods: {
    greet: function(event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.name + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      console.log(event);
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: message => {
      alert(message);
      //   epreventDefault();
      //   자동새로고침을 방지
      //   estopPropagation();
      //   이벤트 상위 엘리먼트 전달 중지
      // html에서는 자식요소의 이벤트가 부모요소까지 영향을 미치는데 이를 막아준다
    }
  }
};
</script>

<style lang="scss" scoped></style>
