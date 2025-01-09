<template>
  <div style="height: 100%; background-color: #fff">
    <van-pull-refresh :model-value="this_loading_get_all" @refresh="this_func_get_all" style="height: 100%">
      <van-cell v-for="item in this_account_list"
                :title="item.name"
                :label="format_yyyy_mm_dd_dd_mm_ss(item.lastTime)"
                :value="'¥' + item.lastAmount" @click="this_func_show_record(item)"/>
    </van-pull-refresh>
    <van-dialog
        v-model:show="this_show_record"
        :title="this_account?.name"
        @confirm="this_func_record"
        show-cancel-button
        close-on-click-overlay>
      <van-cell-group inset>
        <van-field
            ref="this_focus_amount"
            type="number"
            v-model="this_account_record_dto.amount"
            label="当前资金"
            placeholder="请输入当前账户金额"
        />
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue';
import {format_yyyy_mm_dd_dd_mm_ss} from "@/utils/date_utils.ts";
import {api_account_getAll, api_account_record} from "@/api/api_account.ts";
import type {AccountDto, AccountRecordDto} from "@/dto/account_dto.ts";

const this_loading_get_all = ref<boolean>(false);
const this_show_record = ref(false);
const this_focus_amount = ref()

const this_account_list = ref<AccountDto[]>();
const this_account = ref<AccountDto>();

const this_account_record_dto = ref<AccountRecordDto>({code: "", amount: undefined});


// 方法区
const this_func_get_all = async () => {
  this_loading_get_all.value = true
  const {data} = await api_account_getAll()
  this_account_list.value = data
  this_loading_get_all.value = false;
}

const this_func_show_record = async (item: AccountDto) => {
  this_show_record.value = true
  this_account.value = item
  this_account_record_dto.value.code = item.code
  this_account_record_dto.value.amount = undefined
  await nextTick();
  setTimeout(() => {
    if (this_focus_amount.value) {
      this_focus_amount.value.focus();
    }
  }, 100);
}

const this_func_record = async () => {
  await api_account_record(this_account_record_dto.value)
  await this_func_get_all()
}


onMounted(async () => {
  await this_func_get_all()
})

</script>

<style scoped>
</style>
