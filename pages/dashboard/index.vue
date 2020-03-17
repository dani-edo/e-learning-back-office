<template>
  <div>
    <v-app id="inspire">
      <Navbar />

      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="shrink">
              <v-card class="mx-auto" max-width="344">
                <v-img :src="cardImage" height="200px"></v-img>

                <!-- <v-card-title>
                  Upload something here
                </v-card-title> -->

                <v-card-subtitle>
                  Upload something here
                </v-card-subtitle>

                <v-card-actions class="d-block">
                  <v-progress-linear
                    v-model="uploadProgress"
                    height="25"
                    reactive
                  >
                    <strong>{{ Math.ceil(uploadProgress) }}%</strong>
                  </v-progress-linear>
                  <v-file-input
                    label="input file"
                    class="w-100"
                    @change="onFilePicked"
                  ></v-file-input>
                  <v-btn color="purple" class="w-100" text>
                    Upload
                  </v-btn>
                  <v-btn color="green" class="w-100" text @click="downloadFile">
                    Download
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>

      <v-footer app>
        <div class="ml-auto">&copy; by Tutodiv 2020</div>
      </v-footer>
    </v-app>
    <v-dialog v-model="shownModal" max-width="290">
      <v-card>
        <v-card-title class="headline">Cheers!</v-card-title>

        <v-card-text>
          Upload Success
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
import 'firebase/storage'

import Navbar from '~/components/Navbar'
// import Card from '~/components/Card'

export default {
  components: {
    Navbar
    // Card
  },
  middleware: 'auth',
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      image: null,
      cardImage:
        'https://images.unsplash.com/photo-1513398886898-6ae5ff7820f3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ',
      uploadProgress: 0,
      shownModal: false
    }
  },
  watch: {
    shownModal() {
      console.log('executed')
      if (this.shownModal === false) {
        location.reload()
      }
    }
  },
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    onFilePicked(e) {
      if (e) {
        console.log(e, 'run change!')

        // Get File
        const filename = e.name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        // const fileReader = new FileReader()
        // fileReader.addEventListener('load', () => {
        //   this.cardImage = fileReader.result
        // })
        // fileReader.readAsDataURL(e)
        // this.image = e

        // Create a storage ref
        const storageRef = firebase.storage().ref('photos/' + filename)

        // Upload file
        const task = storageRef.put(e)

        // Update progressbar
        task.on(
          'state_changed',
          (snapshot) => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploadProgress = percentage
            console.log('uploadProgress', this.uploadProgress)
          },
          (error) => {
            console.log(error)
          },
          () => {
            console.log('complete')
            this.shownModal = true
          }
        )
      } else {
        console.log('file undefined')
      }
    },
    downloadFile() {
      firebase
        .storage()
        .ref('supercell - Sayonara Memories.mp4')
        .getDownloadURL()
        .then((data) => {
          console.log(data)
        })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.w-100 {
  width: 100%;
}
</style>
