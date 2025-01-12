<template>
  <div style="height: 86vh; overflow-y: auto;">
    <van-tabs v-model:active="this_account_code"
              :ellipsis="false"
              animated
              sticky
              offset-top="6vh"
              @click-tab="this_func_get_account_daily_init">
      <van-tab v-for="item in this_account_list" :title="item.name" :name="item.code">
        <van-list
            v-model:loading="this_account_list_get_loading"
            :finished="this_account_list_get_finished"
            finished-text="没有更多了"
            @load="this_func_get_account_daily_list_page"
        >
          <van-cell v-for="item in this_account_daily_list"
                    :key="item.date"
                    :title="item.date"
                    :value="'¥' + item.amount"/>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import type {AccountDailyDto, AccountDto} from "@/dto/account_dto.ts";
import {api_account_daily_get, api_account_getAll} from "@/api/api_account.ts";

const this_account_list_get_loading = ref(false);
const this_account_list_get_finished = ref(false);

const this_account_list = ref<AccountDto[]>();
const this_account_code = ref<string>('')
const this_account_daily_list = ref<AccountDailyDto[]>([]);

const this_page_number = ref(1);

const this_func_get_account_daily_init = async () => {
  console.log('初始化')
  this_page_number.value = 1
  this_account_daily_list.value = []
  this_account_list_get_finished.value = false
  // await this_func_get_account_daily_list_page()
}
const this_func_get_account_daily_list_page = async () => {
  const res = await api_account_daily_get(this_account_code.value, this_page_number.value);
  if (res.data.length > 0) {
    this_account_daily_list.value.push(...res.data)
  }
  if (res.data.length < 10) {
    this_account_list_get_finished.value = true
  }
  this_account_list_get_loading.value = false;
  this_page_number.value = this_page_number.value + 1;
}

onMounted(async () => {
  const {data} = await api_account_getAll()
  this_account_list.value = data
})

</script>

<style scoped>
</style>
