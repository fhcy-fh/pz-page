<template>
  <div>
    <van-collapse v-model="activeName" @change="change">
      <van-collapse-item title="11层" name="1">
        <van-grid square  column-num="3" :gutter='10'>
          <van-grid-item :icon="images_1" text="1号房" @click="kk"/>
          <van-grid-item :icon="images_1" text="2号房" />
          <van-grid-item :icon="images_1" text="3号房" />
          <van-grid-item :icon="images_1" text="4号房" />
          <van-grid-item :icon="images_1" text="5号房" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="12层" name="2">
        <van-grid square  column-num="3" :gutter='10'>
          <van-grid-item :icon="images_1" text="1号房" />
          <van-grid-item :icon="images_1" text="2号房" />
          <van-grid-item :icon="images_1" text="3号房" />
          <van-grid-item :icon="images_1" text="4号房" />
          <van-grid-item :icon="images_1" text="5号房" />
          <van-grid-item :icon="images_1" text="5号房" />
        </van-grid>
      </van-collapse-item>
    </van-collapse>

    <van-action-sheet :show="show" @close="close" @cancel="close" title="标题">
      <view>内容</view>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import images_1 from '@/assets/images/1.png'

const activeName = ref(['1','2'])
const show = ref(false)

const change = (e) => {
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

<style scoped>
</style>
