<template>
  <div>
    <van-nav-bar style="background-color: #F56C6C; color: #000">
        <!-- <template #left>
            <van-icon name="arrow-left" style="color: #fff;" size="5vw" />
            <el-text style="color: #fff;" size="large">返回</el-text>
        </template> -->
        <template #title>
            <el-text style="color: #fff;" size="large">麻将登记</el-text>
        </template>
    </van-nav-bar>
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
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

<style scoped>
</style>
