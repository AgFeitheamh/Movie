<template>
  <div class="srollWrapper" ref="srollWrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroller',
  props: {
    handleToScroll: {
      type: Function,
      default: function () {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {}
    }
  },

  mounted () {
    /* eslint-disable no-new */
    var scroll = new BScroll(this.$refs.srollWrapper, {
      tap: true,
      probeType: 1
    })
    this.scroll = scroll
    scroll.on('scroll', pos => {
      this.handleToScroll(pos)
    })

    scroll.on('touchEnd', pos => {
      this.handleToTouchEnd(pos)
    })
  },
  methods: {
    handleToScrollTop (y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style scoper>
.srollWrapper {
  height: 100%;
}
</style>
