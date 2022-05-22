<template>
  <view class="usercenter">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./usercenter.scss";

export default {
  setup() {
    const msg = ref("usercenter");
    return {
      msg
    };
  }
};
</script>
