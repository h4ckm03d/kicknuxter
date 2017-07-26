import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json')
      //  'fr': require('~/locales/fr.json')
    }
  })
}

var array1 = [{ k: 'v1', v: 2 }, { k: 'v2', v: 2 }, { k: 'v3', v: 2 }]
var array2 = {}
array1.every(function (elem, idx, array) {
  array2[elem.k] = elem.v
  return true
})
console.log(array1)
console.log(array2)
