<template>
  <van-form @submit="thisFuncSave">
    <van-cell-group inset>
      <van-field
          v-model="thisSelectPayInTypeName"
          is-link
          readonly
          name="picker"
          label="入账类型"
          @click="thisShowSelectPayInType = true"
      />
      <van-popup v-model:show="thisShowSelectPayInType" destroy-on-close position="bottom">
        <van-picker
            :columns="thisExchangeGetEnableConfigList"
            @confirm="thisFuncSelectPayInTypeConfirm"
            @cancel="thisShowSelectPayInType = false"
        />
      </van-popup>
      <van-field
          v-model="thisExchangeSaveDto.inAmount"
          label="入账金额"
      />

      <van-field
          v-model="thisSelectPayOutTypeName"
          is-link
          readonly
          name="picker"
          label="出账类型"
          @click="thisShowSelectPayOutType = true"
      />
      <van-popup v-model:show="thisShowSelectPayOutType" destroy-on-close position="bottom">
        <van-picker
            :columns="thisExchangeGetEnableConfigList"
            @confirm="thisFuncSelectPayOutTypeConfirm"
            @cancel="thisShowSelectPayInType = false"
        />
      </van-popup>
      <van-field
          v-model="thisExchangeSaveDto.outAmount"
          label="出账金额"
      />
      <van-field
          v-model="thisExchangeSaveDto.remark"
          rows="3"
          autosize
          label="备注"
          type="textarea"
          maxlength="500"
          placeholder="请输入备注"
          show-word-limit
      />
    </van-cell-group>
    <div style="margin: 2vw;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {ExchangeSaveDto} from "@/dto/ExchangeDto.ts";
import {Toast} from "vant";
import {apiExchangeGetEnableConfig, apiExchangeSave} from "@/api/shop/ApiExchange.ts";
import type {SelectDto} from "@/dto/SelectDto.ts";

// 变量区
const thisShowSelectPayInType = ref(false);
const thisShowSelectPayOutType = ref(false);
const thisSelectPayInTypeName = ref('');
const thisSelectPayOutTypeName = ref('');
const thisExchangeGetEnableConfigList = ref<SelectDto>([{
  text: '',
  value: null
}]);
const thisExchangeSaveDto = ref<ExchangeSaveDto>({
  inType: null,
  inAmount: null,
  outType: null,
  outAmount: null,
});

// 方法区
const thisFuncSelectPayInTypeConfirm = ({selectedValues, selectedOptions}) => {
  thisExchangeSaveDto.value.inType = selectedOptions[0]?.value;
  thisSelectPayInTypeName.value = selectedOptions[0]?.text;
  thisShowSelectPayInType.value = false;
};
const thisFuncSelectPayOutTypeConfirm = ({selectedValues, selectedOptions}) => {
  thisExchangeSaveDto.value.outType = selectedOptions[0]?.value;
  thisSelectPayOutTypeName.value = selectedOptions[0]?.text;
  thisShowSelectPayOutType.value = false;
};

const thisFuncSave = async () => {
  const {data} = await apiExchangeSave(thisExchangeSaveDto.value)
  if (data) {
    Toast.success('保存成功')
  }
}
onMounted(async () => {
  const {data} = await apiExchangeGetEnableConfig()
  thisExchangeGetEnableConfigList.value = data
})
</script>

<style scoped>
</style>
