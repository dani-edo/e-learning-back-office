<template>
  <div>
    <Navbar />
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="'https://www.youtube.com/embed/' + $route.params.id"
      allowfullscreen
    ></b-embed>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  middleware: 'auth'
}
</script>

<style scoped>
.embed-responsive {
  width: 100vw;
  height: calc(100vh - 50px);
  max-width: unset;
  margin-top: 50px;
}
</style>
