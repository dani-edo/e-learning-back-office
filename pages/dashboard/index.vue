<template>
  <div>
    <!-- <div class="container">
      <div>
        <b-row>
          <b-col
            v-for="(item, index) in cards"
            :key="index"
            md="6"
            class="mb-3"
          >
            <Card
              :href-link="item.hrefLink"
              :title="item.cardTitle"
              :description="item.cardDescription"
              :image-link="item.imageLink"
              :video-link="item.videoLink"
              :card-link="true"
            />
          </b-col>
        </b-row>
      </div>
    </div> -->
    <v-app id="inspire">
      <Navbar />

      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="shrink">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  src="https://images.unsplash.com/photo-1513398886898-6ae5ff7820f3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Upload Video
                </v-card-title>

                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="purple" class="w-100" text>
                    Upload
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
  </div>
</template>

<script>
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
      cards: [
        {
          cardTitle: 'How to make a coffee',
          cardDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi libero autem aut, tempora facere nihil, obcaecati deserunt laboriosam, reprehenderit dolore aperiam ipsam quis consequuntur reiciendis fugit voluptate veritatis. Labore.',
          hrefLink: '/dashboard/detail',
          imageLink:
            'https://images.unsplash.com/photo-1510279931157-4ca63af8a363?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ',
          videoLink: 'RFcuNI33Oq4'
        },
        {
          cardTitle: 'How to make a tea',
          cardDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi libero autem aut, tempora facere nihil, obcaecati deserunt laboriosam, reprehenderit dolore aperiam ipsam quis consequuntur reiciendis fugit voluptate veritatis. Labore.',
          hrefLink: '/dashboard/detail',
          imageLink:
            'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ',
          videoLink: 'le6vodQGeVI'
        }
      ],
      show: false
    }
  },
  created() {
    this.$vuetify.theme.dark = true
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
