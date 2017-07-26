<template>
  <section class="container">
    <mu-sub-header>{{this.$store.state.tittleBar}}</mu-sub-header>
    <mu-content-block>
      wekaweka
    </mu-content-block>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'kapur barus'
    }
  },
  fetch({ store, params }) {
    store.commit('setTitleBar', 'this.title')
  },
  mounted() {
    this.$store.commit('setTitleBar', 'mounted')
  }
}
</script>
