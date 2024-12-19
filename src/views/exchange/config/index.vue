<template>
  <div style="padding: 2vw; width: 96vw">
    <van-pull-refresh v-model="thisLoadingExchangeConfigList" @refresh="thisFuncGetList" style="height: 90vh">
      <van-list
          finished-text="没有更多了"
          @load="thisFuncGetList"
      >
        <van-cell v-for="item in thisExchangeConfigList" :key="item" :title="item.name"
                  @click="thisFuncShowUpdate(item)">
          <template #value>
            <van-switch disabled v-model="item.enable"/>
          </template>
        </van-cell>

        <van-button block icon="plus" size="small" type="primary" native-type="submit" style="margin-top: 2vw"
                    @click="thisFuncShowAdd">
        </van-button>
      </van-list>
    </van-pull-refresh>
    <van-action-sheet v-model:show="thisShowAdd" :title="thisShowAddTitle">
      <van-form @submit="thisFuncSave">
        <van-cell-group inset>
          <van-field
              v-model="thisExchangeSaveConfigDto.name"
              label="账号"
          />
          <van-field name="switch" label="状态">
            <template #input>
              <van-switch v-model="thisExchangeSaveConfigDto.enable"/>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 2vw;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-action-sheet>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {apiExchangeGetAllConfig, apiExchangeSaveConfig} from "@/api/shop/ApiExchange.ts";
import type {ExchangeConfigDto} from "@/dto/ExchangeDto.ts";

// 变量区
const thisShowAdd = ref(false);
const thisLoadingExchangeConfigList = ref(false);
const thisShowAddTitle = ref('');
const thisExchangeConfigList = ref<ExchangeConfigDto>([]);
const thisExchangeSaveConfigDto = ref<ExchangeConfigDto>({
  id: null,
  name: "",
  enable: null
});

// 方法区
const thisFuncGetList = async () => {
  thisLoadingExchangeConfigList.value = true
  const {data} = await apiExchangeGetAllConfig()
  thisExchangeConfigList.value = data
  thisLoadingExchangeConfigList.value = false
}
const thisFuncShowAdd = () => {
  thisShowAdd.value = true
  thisShowAddTitle.value = '添加账号'
  thisExchangeSaveConfigDto.value.id = null
  thisExchangeSaveConfigDto.value.name = ''
  thisExchangeSaveConfigDto.value.enable = true
}
const thisFuncShowUpdate = (item: ExchangeConfigDto) => {
  thisShowAdd.value = true
  thisShowAddTitle.value = '修改账号'
  thisExchangeSaveConfigDto.value.id = item.id
  thisExchangeSaveConfigDto.value.name = item.name
  thisExchangeSaveConfigDto.value.enable = item.enable
}
const thisFuncSave = async () => {
  thisShowAdd.value = false
  await apiExchangeSaveConfig(thisExchangeSaveConfigDto.value)
  await thisFuncGetList()
}

onMounted(async () => {
})
</script>

<style scoped>
</style>
