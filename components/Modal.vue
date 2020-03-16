<template>
  <div>
    <b-modal
      ref="general-modal"
      v-model="shownModal"
      hide-footer
      centered
      hide-header
    >
      <div class="d-block text-center">
        <h3>Success!</h3>
        <p>Check your email address</p>
      </div>
      <b-button class="mt-3" variant="outline-info" block @click="hideModal"
        >OK</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    shownModal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    hideModal() {
      this.$refs['general-modal'].hide()
    }
  }
}
</script>

<style lang="scss" scoped></style>
