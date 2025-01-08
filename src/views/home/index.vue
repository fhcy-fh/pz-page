<template>
  <div style="padding-top: 2vh; padding-left: 1vw; padding-right: 1vw;">
    <van-grid direction="horizontal" :column-num="3" :gutter="1">
      <van-grid-item icon="gold-coin-o" text="账户结算" to="/"/>
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
