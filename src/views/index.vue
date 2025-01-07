<template>
  <div class="box">
    <GlobalNavBar :title="currentRouteTitle" :show-back="currentRouteShowBack"></GlobalNavBar>
    <div class="content">
      <RouterView v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <van-tabbar :fixed='false' v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="cashier-o" to="/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/snacks">
        零食
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import GlobalNavBar from '@/components/global/global-navBar.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import { ref, computed, watch, } from 'vue';


// 获取当前路由对象
const route = useRoute();
// 获取路由器实例
const router = useRouter();
// 菜单切换
const active = ref<number>(0)

const currentRouteTitle = computed(() => {
  return route.meta?.title as string || '发财棋牌';
});
const currentRouteShowBack = computed(() => {
  return route.meta?.showBack as boolean || false;
});

const currentRoute = ref<any>(route);
const previousRoute = ref<any>(null);

watch(route, (to, from) => {
  previousRoute.value = { ...currentRoute.value };
  currentRoute.value = { ...route };
  active.value = currentRoute.value.meta.tabbarIndex
}, { immediate: true });

const transitionName = computed(() => {
  if (previousRoute.value) {
    if (previousRoute.value.meta.index > currentRoute.value.meta.index) {
      return 'slide-right';
    } else {
      return 'slide-left';
    }
  }
  return 'slide-right';
});

</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f7f8fa;
}

.content {
  flex: 1;
}

/* 新页面从右侧进入 */
.slide-right-enter-from {
  transform: translateX(100%);
  /* 从右侧完全移出 */
  opacity: 0;
  /* 完全透明 */
}

/* 过渡 */
.slide-right-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

/* 新页面进入后停留在原位 */
.slide-right-enter-to {
  transform: translateX(0);
  /* 滑动到屏幕中央 */
  opacity: 1;
  /* 完全可见 */
}

/* 旧页面从屏幕中央向左侧滑出 */
.slide-right-leave-from {
  transform: translateX(0);
  /* 初始位置在屏幕中央 */
  opacity: 1;
  /* 完全可见 */
}

/* 过渡 */
.slide-right-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

/* 旧页面滑出到左侧并消失 */
.slide-right-leave-to {
  transform: translateX(-100%);
  /* 滑动到左侧完全移出 */
  opacity: 0;
  /* 完全透明 */
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
