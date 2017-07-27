<template>
  <section class="container">
    <mu-sub-header>{{$store.state.tittleBar}}</mu-sub-header>
    <mu-content-block>
      wekaweka
    </mu-content-block>
  </section>
</template>

<script>

export default {
  data() {
    return {
      title: 'semprul'
    }
  },
  mounted() {
    this.$store.commit('SET_TITLEBAR', this.title)
  },
  computed: {
    isHomePage() {
      return this.$route.fullPath === '/index'
    },
    titleBar() {
      return this.$store.state.todos.titleBar
    }
  }
}
</script>
