<template>
  <div>
    <mu-appbar v-if="!isHomePage" :zDepth="0" :title="title === 'index' ? '' : $t(title)" class="example-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left" />
      <mu-icon-button slot="right" href="https://github.com/museui/muse-ui" icon="cloud_download" />
    </mu-appbar>
    <appnav v-if="!isHomePage" @change="handleMenuChange" @close="toggleNav" :open="open" :docked="docked" />
  </div>
</template>

<script>
import appnav from '~/components/AppNavDrawer'

export default {
  components: { appnav },
  data() {
    return {
      open: false,
      title: 'asdasd'
    }
  },
  methods: {
    toggleNav() {
      this.open = !this.open
    }
  },
  computed: {
    isHomePage() {
      return this.$route.fullPath === '/index'
    }
  }
}

</script>
<style>
.example-appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.example-appbar.nav-hide {
  left: 0;
}

.example-content {
  padding-top: 56px;
  padding-left: 256px;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.example-content.nav-hide {
  padding-left: 0;
}

.content-wrapper {
  padding: 48px 72px;
}

@media (min-width: 480px) {
  .example-content {
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
  }
  .example-content {
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
}

.home-page {
  padding: 0;
}

.home-page .example-content {
  transition-duration: 0s;
}
</style>
