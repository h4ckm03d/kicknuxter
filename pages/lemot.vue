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
    this.$store.commit('SET_LANG', 'en')
    Vue.config.lang = 'en'
    this.$i18n.locale = this.$store.state.locale
  }
}
</script>
