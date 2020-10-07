<template>
  <div class="gallery">
    <div id="demo">
      <v-btn color="blue" dark v-on:click="show = !show">
        Toggle
      </v-btn>
      <transition name="fade">
        <p v-if="show">Show</p>
      </transition>
      <transition name="slide-fade">
        <p v-if="show">Slide</p>
      </transition>
      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
      <div id="list-demo">
        <v-btn @click="add">Add</v-btn>
        <v-btn v-on:click="remove">Remove</v-btn>
        <transition-group name="list" tag="p">
          <span v-for="item in items" :key="item" class="list-item">
            {{ item }}
          </span>
        </transition-group>
      </div>
      <div id="flip-list-demo" class="demo">
        <v-btn v-on:click="shuffle">Shuffle</v-btn>
        <transition-group name="flip-list" tag="ul">
          <li v-for="el in values" v-bind:key="el">
            {{ el }}
          </li>
        </transition-group>
      </div>
    </div>
    <!-- demo end -->
    <transition name="slide-fade" mode="in-out">
      <v-btn v-if="isEditing" key="save" @click="isEditing = !isEditing">
        Save
      </v-btn>
      <v-btn v-else key="edit" @click="isEditing = !isEditing">
        Edit
      </v-btn>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Gallery",
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.values = _.shuffle(this.values);
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 136px);
  padding: 50px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
#list-demo {
  margin-top: 40px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
</style>
