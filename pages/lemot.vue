<template>
  <section class="container">
    <mu-sub-header>Semprul huehue</mu-sub-header>
    <mu-content-block>
      {{title}}
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
  }
}
</script>
