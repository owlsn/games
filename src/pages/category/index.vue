<template>
  <view class="category">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./category.scss";

export default {
  setup() {
    const msg = ref("category");
    return {
      msg
    };
  }
};
</script>
