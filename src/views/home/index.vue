<template>
  <div style="padding-left: 1vw; padding-right: 1vw;">
    <van-notice-bar
        left-icon="volume-o"
        text="功能持续更新中。"
    />
    <van-grid direction="horizontal" :column-num="3" :gutter="1" style="margin-top: 1vh;">
      <van-grid-item icon="gold-coin-o" text="账户结算" to="/record/account"/>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';


onMounted(() => {
})

</script>

<style scoped>
</style>
