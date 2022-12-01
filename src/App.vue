<template>
    <router-view to='/'></router-view>
</template>

<script>

const VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL || '/';

export default {

  data() {
    return {
      VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },

  name: 'App',
  components: {
  },
  output: {
    publicPath: VUE_APP_BASE_URL,
  }
}
</script>

