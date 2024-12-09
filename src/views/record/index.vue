<template>
  <div>
    <van-collapse v-model="activeName" @change="change">
      <van-collapse-item :title="shop.shopName" :name="shop.shopCode" v-for="shop in shopList">
        <van-grid square column-num="3" :gutter='10'>
          <van-grid-item @click="kk" v-for="room in shop.roomList">
              <van-icon :name="images_1" size="10vw" />
              <b>1号房(空闲)</b>
          </van-grid-item>
        </van-grid>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import images_1 from '@/assets/images/1.png'

const shopList = ref([
  {
    shopCode: '1',
    shopName: '11层',
    roomList: [
      {
        roomName: '1号房',
        used: false,
        usedName: '空闲'
      },
      {
        roomName: '2号房',
        used: false,
        usedName: '空闲'
      },
      {
        roomName: '3号房',
        used: false,
        usedName: '空闲'
      },
      {
        roomName: '4号房',
        used: false,
        usedName: '空闲'
      },
      {
        roomName: '5号房',
        used: false,
        usedName: '空闲'
      }
    ]
  },
  {
    shopCode: '2',
    shopName: '12层',
    roomList: [
      {
        roomName: '1号房',
        used: false,
        usedName: '空闲'
      },
      {
        roomName: '2号房',
        used: false,
        usedName: '空闲'
      }
    ]
  }
]);


const activeName = ref(['1', '2'])
const show = ref(false)

const change = (e: any) => {
  activeName.value = e.detail

  console.log(activeName.value)
}

const kk = () => {
  show.value = true
}
const close = () => {
  show.value = false
}
</script>

<style scoped></style>
