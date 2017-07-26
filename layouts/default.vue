<template>
  <div class="layout">
    <headc/>
    <div class="content">
      <breadcrumb/>
      <div class="body">
        <nuxt/>
      </div>
    </div>
    <footc/>
  </div>
</template>
<script>

import light from 'muse-ui/dist/theme-default.css'
import dark from 'muse-ui/dist/theme-dark.css'
import carbon from 'muse-ui/dist/theme-carbon.css'
import teal from 'muse-ui/dist/theme-teal.css'
import footc from '~/components/footc'
import headc from '~/components/headc'
import breadcrumb from '~/components/breadcrumb'

export default {
  components: { footc, headc, breadcrumb },
  data() {
    return {
      theme: 'light',
      themes: {
        light,
        dark,
        carbon,
        teal
      }
    }
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = this.themes[theme] || ''
    },
    getThemeStyle() {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  }
}
</script>
</script>
<style scoped>
.layout {
  background-color: rgb(236, 236, 236);
}

.content {
  width: 90%;
  margin: 0 auto;
}

.body {
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

</style>
