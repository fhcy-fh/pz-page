<template>
  <div>
    <van-nav-bar title="发财麻将" style="background-color: #F56C6C;" />
    <RouterView></RouterView>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="cashier-o" @click="toHome">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="edit" to="/record">
        登记
      </van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="snacks">
        零食
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/indes';
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const active = ref(0)

const toHome = () => {
  router.push('/');
  active.value = 0;
}
const toRecord = () => {
  router.push('/record');
  active.value = 1;
}
const toSnacks = () => {
  router.push('/snacks');
  active.value = 2;
}

</script>

<style scoped></style>
