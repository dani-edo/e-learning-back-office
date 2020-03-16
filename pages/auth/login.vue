<template>
  <div class="full">
    <div class="container">
      <b-card title="Login" class="login-container">
        <b-card-text>
          <b-form @submit.prevent="onSubmit">
            <b-form-group label="Email" label-for="input-1">
              <b-form-input
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <b-input
                id="password"
                v-model="form.password"
                type="password"
                aria-describedby="password-help-block"
                placeholder="Enter password"
              ></b-input>
            </b-form-group>
            <b-form-invalid-feedback class="d-block">
              {{ form.error }}
            </b-form-invalid-feedback>
            <b-button type="submit" variant="info" class="mt-3"
              >Submit</b-button
            >
          </b-form>
          <b-form-text class="mt-3">
            Don't have an account?. Sign up
            <nuxt-link to="/auth/register"> here</nuxt-link>.
          </b-form-text>
        </b-card-text>
      </b-card>
    </div>
    <b-modal
      ref="error-modal"
      v-model="shownModal"
      hide-footer
      centered
      hide-header
    >
      <div class="d-block text-center">
        <h3>Error!</h3>
        <p>{{ form.error }}</p>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >OK</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        error: ''
      },
      shownModal: false
    }
  },
  middleware: 'loggedInCheck',
  methods: {
    onSubmit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          if (data.user.emailVerified) {
            this.$router.push('/dashboard')
          } else {
            this.form.error =
              'Your email has not been verified. Please check your email'
            this.showModal()
            firebase.auth().signOut()
          }
        })
        .catch((error) => {
          this.form.error = error.message
        })
    },
    showModal() {
      this.$refs['error-modal'].show()
    },
    hideModal() {
      this.$refs['error-modal'].hide()
    }
  }
}
</script>

<style scoped>
.full {
  /* background: url('/maclogin.jpeg'); */
  background: #17a2b8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.login-container {
  width: 400px;
  max-width: 600px;
  height: 400px;
  filter: drop-shadow(2px 4px 6px rgba(46, 46, 46, 0.5));
}
img {
  height: 100%;
  object-fit: cover;
}
</style>
