<template>
  <div style="margin-top: 1vh">
    <van-loading
        v-if="this_loading_get_all"
        color="#1989fa"
        size="8vw"
        vertical>
      加载中
    </van-loading>
    <van-swipe-cell v-else v-for="item in this_account_list">
      <van-cell :title="item.name" :value="item.last_amount" @click="this_func_show_update(item)"/>
      <template #right>
        <van-button square type="danger" text="删除"/>
      </template>
    </van-swipe-cell>
    <van-button plain hairline
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
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import type {AccountDto, AccountSaveDto, AccountUpdateDto} from "@/dto/account_dto.ts";
import {api_account_getAll, api_account_save, api_account_update} from "@/api/api_account.ts";

const this_show_save = ref(false);
const this_show_update = ref(false);
const this_loading_get_all = ref(false);

const this_account_list = ref<AccountDto[]>();
const this_account_save_dto = ref<AccountSaveDto>({
  name: ''
});
const this_account_update_dto = ref<AccountUpdateDto>({
  code: '',
  name: ''
});

// 方法区
const this_func_get_all = async () => {
  this_loading_get_all.value = true
  const {data} = await api_account_getAll()
  this_account_list.value = data
  this_loading_get_all.value = false;
}

const this_func_init = async () => {
  this_account_save_dto.value = {
    name: ''
  }
  this_account_update_dto.value = {
    code: '',
    name: ''
  }
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
