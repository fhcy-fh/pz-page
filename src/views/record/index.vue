<template>
  <div>
    <van-collapse v-model="activeName">
      <van-collapse-item :title="shop.shopName" :name="shop.shopCode" v-for="shop in shopList">
        <van-grid square column-num="3" :gutter='10'>
          <van-grid-item @click="thisShowDetail(room)" v-for="room in shop.roomList">
            <van-icon :name="image" size="10vw"/>
            <b>{{ room.roomName }}{{ room.usedName }}</b>
          </van-grid-item>
        </van-grid>
      </van-collapse-item>
    </van-collapse>

    <van-action-sheet v-model:show="thisShowDetailFlag" title="房间登记">
      <div class="content">内容</div>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import images_1 from '@/assets/images/1.png'
import images_2 from '@/assets/images/2.png'

const thisShowDetailFlag = ref(false);
const activeName = ref(['1', '2'])

const image = ref(images_1)

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

const thisShowDetail = (room: any) => {
  thisShowDetailFlag.value = true
  image.value = images_2
}
</script>

<style scoped></style>
