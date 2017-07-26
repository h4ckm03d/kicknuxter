<template>
  <section class="container">
    <mu-sub-header>{{$store.state.todos.tittleBar}}</mu-sub-header>
    <mu-content-block>
      wekaweka
    </mu-content-block>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'kapur barus'
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/add'
    })
  },
  fetch({ store, params }) {
    store.commit('todos/add', '--a')
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
