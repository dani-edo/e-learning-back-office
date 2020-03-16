<template>
  <div>
    <nuxt-link :to="hrefLink + '/' + videoLink">
      <b-card
        :img-src="imageLink"
        text-variant="white"
        img-alt="Card image"
        img-top
        :title="title"
        :class="cardLink ? 'card-link' : ''"
      >
        <b-card-text>
          {{ description }}
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    cardLink: {
      type: Boolean,
      default: false
    },
    imageLink: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1510279931157-4ca63af8a363?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ'
    },
    hrefLink: {
      type: String,
      default: '/'
    },
    videoLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card-link {
  border: none;
}
.card-link:hover {
  box-shadow: 0px 5px 10px #00000075;
}
.card-body {
  background: #4aa3b8;
}
a:hover {
  text-decoration: none;
}
</style>
