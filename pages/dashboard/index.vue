<template>
  <div>
    <Navbar />
    <div class="container">
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
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Card from '~/components/Card'

export default {
  components: {
    Navbar,
    Card
  },
  middleware: 'auth',
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
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media (max-width: 425px) {
  .container {
    margin-top: 80px;
  }
}
</style>
