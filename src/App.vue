<template>
  <div id="app">
    <!-- <tab-bar>
      !--传递字符串不需要加 :,如 :path="/home"--
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> -->
    <main-tab-bar />
    <router-view></router-view>
  </div>
</template>
<script>
  // import TabBar from '@/components/common/tabbar/TabBar.vue'
  // import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  import MainTabBar from '@/components/content/maintabbar/MainTabBar.vue'
  export default {
    name: 'App',
    components: {
      // TabBar,
      // TabBarItem
      MainTabBar
    }
  }

</script>
<style>
  @import "~@/assets/css/base.css";

</style>
