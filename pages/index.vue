<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        tutodiv-back-office
      </h1>
      <h2 class="subtitle">
        My stellar Nuxt.js project
      </h2>
      <div class="links">
        <a href="/auth/login" class="button--green">
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

// General Styling
<style>
body {
  background: #2e495e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

// Scoped Styling
<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #60c690;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (max-width: 425px) {
  .title {
    font-size: 3.5rem;
  }
  .NuxtLogo {
    width: 11rem;
  }
  .subtitle {
    font-size: 35px;
  }
}
</style>
