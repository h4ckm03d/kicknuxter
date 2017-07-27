<template>
  <section class="container">
    <mu-sub-header>Index coy</mu-sub-header>
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
  mounted() {
    this.$store.commit('SET_TITLEBAR', this.title)
  }
}
</script>
