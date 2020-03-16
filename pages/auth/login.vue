<template>
  <div class="full">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form id="login_form" @submit.prevent="onSubmit">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      name="email"
                      prepend-icon="person"
                      type="email"
                    />

                    <v-text-field
                      id="password"
                      v-model="form.password"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                    />
                    <v-spacer />
                    <v-alert v-if="form.error" dense outlined type="error">
                      {{ form.error }}
                    </v-alert>
                    <v-spacer />
                    <div class="container--button mt-3">
                      <v-btn type="submit" color="primary">Login</v-btn>
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
    <v-dialog v-model="shownModal" max-width="290">
      <v-card>
        <v-card-title class="headline">Error!</v-card-title>

        <v-card-text>
          {{ form.error }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="shownModal = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  middleware: 'loggedInCheck',
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: null,
    form: {
      email: '',
      password: '',
      error: ''
    },
    shownModal: false
  }),
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
      this.shownModal = true
    }
  }
}
</script>

<style scoped>
.container.fill-height > .row {
  max-width: unset;
}
.container--button {
  display: flex;
}
.container--button button {
  margin-left: auto;
}
</style>
