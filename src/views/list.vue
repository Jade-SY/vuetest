<template>
  <div>
    <h1>List Page</h1>
    <ul id="example-1">
      <li v-for="(item, i) in items" :key="i">{{ item.message }}</li>
      <!-- 배열을 iteration -->
    </ul>
    <ul id="v-for-object" class="demo">
      <h3></h3>
      <li v-for="(value, name) in object" :key="name">{{ value }}</li>
      <li v-for="(value, name) in object" :key="name">
        {{ name }} : {{ value }}
      </li>
      <li v-for="(a, x) in object" :key="x">{{ a }}</li>
      <!-- 객체를 iteration -->
    </ul>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <br />
    <li v-for="n in oddNumbers" :key="n">{{ n }}</li>
    <br />
    <span v-for="(n, x) in 33" :key="x">
      {{ n }}
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: "List",
  components: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
        text: "ABCD"
      },
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    oddNumbers: function() {
      return this.numbers.filter(function(odd) {
        return odd % 2 === 1;
      });
    }
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
</style>
