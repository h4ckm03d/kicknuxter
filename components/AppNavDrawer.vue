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
    <mu-list :value="menuVal">
      <mu-list-item @change="handleMenuChange" :title="$t('getStarted')" toggleNested>
        <mu-list-item slot="nested" :title="$t('installation')" to="/lemot"></mu-list-item>
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
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide() {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    },
    changeLang(lang) {
      window.localStorage.setItem('lang', lang)
    }
  },
  // mounted() {
  //   // this.menuVal = window.location.hash
  //   // window.addEventListener('hashchange', () => {
  //   //   this.menuVal = window.location.hash
  //   // })
  //   // var xhr = new window.XMLHttpRequest()
  //   // xhr.open('GET', '/version.json', true)
  //   // xhr.onload = () => {
  //   //   if (xhr.readyState === 4) {
  //   //     if (xhr.status === 200) {
  //   //       this.versions = JSON.parse(xhr.responseText)
  //   //       console.log(this.versions, this.version)
  //   //     } else {
  //   //       console.error(xhr.statusText)
  //   //     }
  //   //   }
  //   // }
  //   // xhr.send()
  // },
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
