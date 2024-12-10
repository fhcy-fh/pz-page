<template>
    <van-nav-bar :style="{ backgroundColor: '#F56C6C', color: '#000' }" @click-left="handleBack">
        <template #left v-if="props.showBack">
            <van-icon name="arrow-left" :style="{ color: '#fff' }" size="5vw" />
            <el-text :style="{ color: '#fff' }" size="large">返回</el-text>
        </template>
        <template #title>
            <el-text :style="{ color: '#fff' }" size="large">{{ props.title }}</el-text>
        </template>
    </van-nav-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
    title: string,
    showBack: boolean
}
const props = defineProps<Props>();

// 获取路由器实例
const router = useRouter();

const handleBack = () => {
    router.back()
}
</script>

<style scoped></style>