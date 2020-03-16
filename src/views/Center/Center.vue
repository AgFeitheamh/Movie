<template>
    <div id="main">
    <MainHeader title="-我的电影-"></MainHeader>
    <div id="content">
      <Login></Login>
    </div>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainHeader from '@/components/Header/Header.vue'
import MainTabBar from '@/components/TabBar/TabBar.vue'
import Login from '@/components/Login/Login.vue'
export default {
  name: 'cneter',
  components: {
    MainHeader,
    MainTabBar,
    Login
  }
}
</script>

<style>

</style>
