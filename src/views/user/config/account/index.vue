<template>
  <div style="margin-top: 1vh; height: 100%; background-color: #fff">
    <van-pull-refresh :model-value="this_loading_get_all" @refresh="this_func_get_all" style="height: 100%">
      <van-swipe-cell v-for="item in this_account_list">
        <van-cell :title="item.name" :label="format_yyyy_mm_dd_dd_mm_ss(item.lastTime)" :value="'¥' + item.lastAmount" @click="this_func_show_update(item)"/>
        <template #right>
          <van-button square type="danger" text="删除" style="height: 100%"/>
        </template>
      </van-swipe-cell>
      <van-button
          plain
          hairline
          type="primary"
          @click="this_func_show_save"
          style="width: 80vw; margin-top: 2vh; margin-left: 10vw; margin-right: 10vw">
        新增
      </van-button>

      <van-dialog
          v-model:show="this_show_save"
          title="新增账户"
          @confirm="this_func_save"
          show-cancel-button
          close-on-click-overlay>
        <van-cell-group inset>
          <van-field
              v-model="this_account_save_dto.name"
              label="账户"
              placeholder="账户名"
          />
          <van-field
              v-model="this_account_save_dto.lastAmount"
              label="初始资金"
              placeholder="初始资金"
          />
        </van-cell-group>
      </van-dialog>
      <van-dialog
          v-model:show="this_show_update"
          title="编辑账户"
          @confirm="this_func_update"
          show-cancel-button
          close-on-click-overlay>
        <van-cell-group inset>
          <van-field
              v-model="this_account_update_dto.name"
              label="账户"
              placeholder="账户名"
          />
          <van-field
              v-model="this_account_update_dto.lastAmount"
              label="初始资金"
              placeholder="初始资金"
          />
        </van-cell-group>
      </van-dialog>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import type {AccountDto, AccountSaveDto, AccountUpdateDto} from "@/dto/account_dto.ts";
import {api_account_getAll, api_account_save, api_account_update} from "@/api/api_account.ts";
import {format_yyyy_mm_dd_dd_mm_ss} from "@/utils/date_utils.ts";

const this_show_save = ref(false);
const this_show_update = ref(false);
const this_loading_get_all = ref<boolean>(false);

const this_account_list = ref<AccountDto[]>();
const this_account_save_dto_init = {
  name: '',
  lastAmount: 0
};
const this_account_save_dto = ref<AccountSaveDto>(this_account_save_dto_init);

const this_account_update_dto_init = {
  code: '',
  name: '',
  lastAmount: 0
};
const this_account_update_dto = ref<AccountUpdateDto>(this_account_update_dto_init);

// 方法区
const this_func_get_all = async () => {
  this_loading_get_all.value = true
  const {data} = await api_account_getAll()
  this_account_list.value = data
  this_loading_get_all.value = false;
}

const this_func_init = async () => {
  this_account_save_dto.value = this_account_save_dto_init
  this_account_update_dto.value = this_account_update_dto_init
}

const this_func_show_save = () => {
  this_show_save.value = true;
}
const this_func_show_update = (item: AccountDto) => {
  console.log(item);
  this_account_update_dto.value.code = item.code
  this_account_update_dto.value.name = item.name
  this_show_update.value = true;
}
const this_func_save = async () => {
  await api_account_save(this_account_save_dto.value)
  await this_func_init()
  await this_func_get_all();
}

const this_func_update = async () => {
  await api_account_update(this_account_update_dto.value)
  await this_func_init()
  await this_func_get_all()
}

onMounted(async () => {
  await this_func_get_all();
})

</script>

<style scoped></style>
