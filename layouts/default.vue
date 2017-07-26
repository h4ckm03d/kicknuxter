<template>
  <div class="layout">
    <mu-appbar v-if="!isHomePage" :zDepth="0" :title="titleBar" class="cassava-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left" />
      <mu-icon-button slot="right" href="https://github.com/museui/muse-ui" icon="cloud_download" />
    </mu-appbar>
    <appnav v-if="!isHomePage" @change="handleMenuChange" @close="toggleNav" :open="open" :docked="docked" />
    <div class="cassava-content" :class="{'nav-hide': !open, 'home-page': isHomePage}">
      <nuxt/>
    </div>
    <footc/>
  </div>
</template>
<script>

import footc from '~/components/footc'
import appnav from '~/components/AppNavDrawer'
import { mapMutations } from 'vuex'

export default {
  components: { footc, appnav },
  data() {
    const desktop = true
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop
    }
  },
  fetch({ store, params }) {
    store.commit('todos/add', '--a')
  },
  methods: {
    toggleNav() {
      this.open = !this.open
    },
    handleMenuChange() {

    },
    ...mapMutations({
      add: 'todos/add'
    })
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
<style scoped>
.cassava-appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.cassava-appbar.nav-hide {
  left: 0;
}

.cassava-content {
  padding-top: 56px;
  padding-left: 256px;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.cassava-content.nav-hide {
  padding-left: 0;
}

.content-wrapper {
  padding: 48px 72px;
}

@media (min-width: 480px) {
  .cassava-content {
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .cassava-appbar {
    left: 0;
  }
  .cassava-content {
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
}

.home-page {
  padding: 0;
}

.home-page .cassava-content {
  transition-duration: 0s;
}
</style>
