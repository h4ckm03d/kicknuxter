<template>
  <section class="container">
    <mu-sub-header>Index coy</mu-sub-header>
    <mu-content-block>
      wekaweka
      <mu-flat-button icon="flag" class="demo-flat-button" backgroundColor="#a4c639" color="#FFF" @click="changeLang" :label="lang" />
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
  methods: {
    changeLang: function () {
      if (this.$store.state.locale === 'en') {
        this.$store.commit('SET_LANG', 'fr')
      } else {
        this.$store.commit('SET_LANG', 'en')
      }
      this.$i18n.locale = this.lang
    }
  },
  computed: {
    lang: function () {
      return this.$store.state.locale
    }
  },
  mounted() {
    this.$store.commit('SET_TITLEBAR', this.title)
  }
}
</script>
