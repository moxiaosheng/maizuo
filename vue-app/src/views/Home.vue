<template>
  <div class="page-home">
    <div class="page-home__view">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item 
        v-for="tab in tabs"
        :key="tab.id"
        :id="tab.id"
        :href="tab.href">
        <i slot="icon" :class="['iconfont', tab.icon]"></i>
        {{tab.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      selected: 1,
      tabs: [
        {
          id: 1,
          name: '电影',
          icon: 'icon-dianying',
          href: '/#/films'
        },
        {
          id: 2,
          name: '影院',
          icon: 'icon-yingyuan',
          href: '/#/cinemas'
        },
        {
          id: 3,
          name: '咨询',
          icon: 'icon-zixun',
          href: 'http://www.baidu.com'
        },
        {
          id: 4,
          name: '我的',
          icon: 'icon-wode',
          href: '/#/center'
        }
      ]
    }
  },

  watch: {
    $route: {
      handler (newVal) {
        this.selected = newVal.meta.tabId
      },
      immediate: true
    } 
  }
}
</script>

<style lang="scss">
  .page-home {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__view {
      flex: 1;
      overflow-y: auto;
    }

    .mint-tabbar {
      
      .mint-tab-item {
        color: #797d82;

        &.is-selected {
          color: #ff5f16;
          background-color: transparent; 
        }
      }

      .iconfont {
        font-size: 24px;
      }
    }
  }
</style>
