<template>
  <div style="padding: 2vw; width: 96vw; overflow-y: auto">
    <van-list
        finished-text="没有更多了"
        @load="thisFuncGetList"
        style="height: 75vh"
    >
      <van-cell-group :title="item.configName" v-for="item in thisExchangeTotalList" :key="item.configId">
        <van-cell title="入账" icon="plus" :value="item.inAmount"/>
        <van-cell title="出账" icon="minus" :value="item.outAmount"/>
      </van-cell-group>
    </van-list>

    <van-action-sheet v-model:show="thisShowAdd" title="兑换">
      <Add/>
    </van-action-sheet>
  </div>
  <van-button block icon="plus" size="small" type="primary" native-type="submit" style="margin-top: 2vw"
              @click="thisShowAdd=true">
  </van-button>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import Add from './add/index.vue'
import type {ExchangeConfigDto, ExchangeTotalDto} from "@/dto/ExchangeDto.ts";
import {apiExchangeGet} from "@/api/shop/ApiExchange.ts";

const props = defineProps(['type'])
// 变量区
const thisShowAdd = ref(false)

const thisExchangeTotalList = ref<ExchangeTotalDto>([]);

// 方法区
const thisFuncGetList = () => {
}

onMounted(async () => {
  const {data} = await apiExchangeGet()
  thisExchangeTotalList.value = data
})

</script>

<style scoped>
</style>
