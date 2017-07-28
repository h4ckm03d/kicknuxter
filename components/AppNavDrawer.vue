<template>
  <mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
    <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
      <nuxt-link to="/" class="cassava-appbar-title">Muse-UI</nuxt-link>
      <!-- <mu-badge content="rc" class="exmaples-version" secondary/> -->
    </mu-appbar>
    <mu-divider/>
    <div class="cassava-drawer-content">
      <div class="mu-version-box">
        <span class="mu-version-text">Version: </span>
        <mu-dropDown-menu :value="version" @change="handleVersionChange" v-if="versions.length > 0">
          <mu-menu-item v-for="vtext in versions" :key="'version-' + vtext" :value="vtext" :title="vtext" />
        </mu-dropDown-menu>
      </div>
    </div>
    <mu-list  @change="handleMenuChange" :value="menuVal">
      <mu-list-item :title="$t('getStarted')" toggleNested>
        <mu-list-item slot="nested" :title="$t('about.title')" to="/" value="/"></mu-list-item>
        <mu-list-item slot="nested" :title="$t('installation')" to="/lemot" value="/lemot"></mu-list-item>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
import en from '~/locales/en'
import packageJson from '~/package.json'
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuVal: '/',
      version: packageJson.version,
      versions: []
    }
  },
  methods: {
    handleVersionChange(val) {
      if (val !== this.version) {
        var url = this.versions.indexOf(val) === 0 ? '/' : '/' + val
        window.open(url)
      }
    },
    handleClose() {
      this.$emit('close')
    },
    handleMenuChange(val) {
      this.menuVal = this.$route.path
      if (!this.docked) {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide() {
      if (!this.changeHref) return
      this.changeHref = false
    }
  },
  mounted() {
    var self = this
    this.menuVal = this.$route.path
    window.addEventListener('hashchange', () => {
      this.menuVal = self.$route.path
    })
  },
  locales: {
    en
  }
}
</script>
<style>
.app-drawer {
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.mu-appbar {
  flex-shrink: 0;
}

.cassava-appbar-title {
  color: inherit;
  display: inline-block;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}

.mu-version-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}

.mu-version-text {
  font-size: 16px;
  margin-top: 8px;
  width: 60px;
}

.mu-lang-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}
</style>
