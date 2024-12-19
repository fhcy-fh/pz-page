<template>
  <div style="padding-left: 3vw; padding-right: 3vw; padding-top: 2vw">
    <el-card>
      <van-form @submit="onSubmit">
        <van-field
            v-model="roomDetailDto.shopName"
            readonly
            disabled
            label="门店："
        />
        <van-field
            v-model="roomDetailDto.name"
            readonly
            disabled
            label="房间"
        />
        <van-field
            v-model="typeName"
            is-link
            readonly
            label="牌局"
            @click="thisShowTypeSelect = true"
        />
        <van-popup v-model:show="thisShowTypeSelect" destroy-on-close position="bottom">
          <van-picker
              :columns="ConstOrderType"
              @confirm="thisFuncConfirmTypeSelect"
              @cancel="thisShowTypeSelect = false"
          />
        </van-popup>
        <van-field
            v-model="orderSaveDto.amount"
            label="桌费"
        />
        <van-field
            v-model="orderSaveDto.earnestAmount"
            label="押金"
        />
        <van-field name="checkbox" label="其他">
          <template #input>
            <van-checkbox v-model="orderSaveDto.useAir" shape="square">空调</van-checkbox>
            <van-checkbox v-model="orderSaveDto.useFire" shape="square" style="margin-left: 5vw;">电烤炉</van-checkbox>
          </template>
        </van-field>
        <van-field
            v-model="orderSaveDto.otherAmount"
            label="其他费用"
        />
        <van-field
            v-model="orderSaveDto.startTime"
            label="开始时间"
        />
        <van-field
            v-model="orderSaveDto.endTime"
            label="结束时间"
        />
        <van-field
            v-model="orderSaveDto.remark"
            rows="3"
            autosize
            label="备注"
            type="textarea"
            maxlength="500"
            placeholder="请输入备注"
            show-word-limit
        />
        <div>
          <van-button block size="small" type="primary" color="#f56c6c" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {apiRoomGetDetail} from "@/api/shop/ApiRoom.ts";
import type {RoomDetailDto} from "@/dto/RoomDto.ts";
import type {OrderSaveDto} from "@/dto/OrderDto.ts";
import {ConstOrderType} from "@/consts/Consts.ts";
// 获取路由器实例
const route = useRoute()
// 变量定义
const checked = ref([]);
const roomDetailDto = ref<RoomDetailDto>({
  code: '',
  shopCode: '',
  shopName: '',
  name: '',
  status: 0,
  enable: false
});

const orderSaveDto = ref<OrderSaveDto>({
  roomCode: '',
  type: '',
  useAir: false,
  useFire: false,
  amount: ConstOrderType[1].amount,
  otherAmount: null,
  earnestAmount: null,
  startTime: '',
  endTime: ''
});
const typeName = ref(ConstOrderType[1].text)


//===== 显示控制
const thisShowTypeSelect = ref(false)
//=====


// 方法区
const thisFuncConfirmTypeSelect = ({selectedValues, selectedOptions}) => {
  orderSaveDto.value.type = selectedValues[0]
  typeName.value = selectedOptions[0].text
  thisShowTypeSelect.value = false
  orderSaveDto.value.amount = ConstOrderType.find(item => item.value === orderSaveDto.value.type)?.amount;
};

onMounted(async () => {
  const {data} = await apiRoomGetDetail(route.query.roomCode)
  roomDetailDto.value = data
  orderSaveDto.value.roomCode = data.code
})


</script>

<style scoped></style>
