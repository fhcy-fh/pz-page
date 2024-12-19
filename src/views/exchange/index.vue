<template>
  <van-tabs>
    <van-tab title="今日">
      <Item :type="DateEnum.today"/>
    </van-tab>
    <van-tab title="本周">
      <Item :type="DateEnum.current_week"/>
    </van-tab>
    <van-tab title="本月">
      <Item :type="DateEnum.current_month"/>
    </van-tab>
    <van-tab title="本年">
      <Item :type="DateEnum.current_year"/>
    </van-tab>
    <van-tab title="明细">
      <Detail/>
    </van-tab>
    <van-tab title="配置">
      <Config/>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import Item from '@/views/exchange/item/index.vue'
import Detail from '@/views/exchange/detail/index.vue'
import Config from '@/views/exchange/config/index.vue'
import {DateEnum} from "@/enums/DateEnum.ts";


</script>

<style scoped>
</style>
