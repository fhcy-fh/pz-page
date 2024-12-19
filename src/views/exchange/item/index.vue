<template>
  <div style="padding: 2vw; width: 96vw">
    <el-card>
      <van-cell-group title="现金">
        <van-cell title="入账" icon="plus" value="2500"/>
        <van-cell title="出账" icon="minus" value="3600"/>
      </van-cell-group>
    </el-card>
    <el-card style="margin-top: 2vw">
      <van-cell-group title="微信">
        <van-cell title="入账" icon="plus" value="2500"/>
        <van-cell title="出账" icon="minus" value="3600"/>
      </van-cell-group>
    </el-card>
    <el-card style="margin-top: 2vw">
      <van-cell-group title="支付宝">
        <van-cell title="入账" icon="plus" value="2500"/>
        <van-cell title="出账" icon="minus" value="3600"/>
      </van-cell-group>
    </el-card>
    <van-button block icon="plus" size="small" type="primary" native-type="submit" style="margin-top: 2vw"
                @click="thisShowAdd=true">
    </van-button>
    <van-action-sheet v-model:show="thisShowAdd" title="兑换">
      <Add/>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import Add from './add/index.vue'

const props = defineProps(['type'])
const thisShowAdd = ref(false)

// 方法区
onMounted(async () => {
})

</script>

<style scoped>
</style>
