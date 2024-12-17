<template>
  <div>
    <van-collapse v-model="activeList">
      <van-collapse-item :title="shop.name" :name="shop.code" v-for="shop in shopList">
        <van-grid square column-num="3" :gutter='10'>
          <van-grid-item @click="thisShowDetail(room)" v-for="room in shop.roomList">
            <van-icon :name="room.status == 0 ? images_1 : images_2" size="10vw"/>
            <b>{{ room.name }}({{ room.status == 0 ? '空闲' : '' }})</b>
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
import {apiGetShopList} from "@/api/shop/ApiShop.ts";
import type {ShopDto} from "@/dto/ShopDto.ts";

const thisShowDetailFlag = ref(false);
const activeList = ref([1, 2])

const shopList = ref<ShopDto>([]);

const thisShowDetail = (room: any) => {
  thisShowDetailFlag.value = true
}
onMounted(async () => {
  const { data } = await apiGetShopList();
  shopList.value = data;
  activeList.value = shopList.value.map(shop => shop.code);
})
</script>

<style scoped></style>
