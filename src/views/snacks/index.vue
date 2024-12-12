<template>
  <div>
    <van-grid square column-num="3" :gutter='10'>
      <van-grid-item v-for="snacks in snacksList">
        <van-image width="10vw" height="10vw" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <b>{{ snacks.name }}</b>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import images_1 from '@/assets/images/1.png'

const snacksList = ref([
  {
    code: '1',
    name: '薯片',
    url: ''
  },
  {
    code: '2',
    name: '辣条',
    url: ''
  }
]);


const activeName = ref(['1', '2'])

const change = (e: any) => {
  activeName.value = e.detail
}

</script>

<style scoped></style>
