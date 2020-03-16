<template>
  <div id="main">
    <MainHeader title="-影院-"></MainHeader>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>

      <!-- <keep-alive>
        <router-view></router-view>
      </keep-alive>-->
      <CityList></CityList>
    </div>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainHeader from '@/components/Header/Header.vue'
import MainTabBar from '@/components/TabBar/TabBar.vue'
import CityList from '@/components/CityList/CityList.vue'
export default {
  name: 'cinema',
  components: {
    MainHeader,
    MainTabBar,
    CityList
  }
}
</script>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>
