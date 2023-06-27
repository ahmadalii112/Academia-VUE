<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show Details' }}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'friend-contact',
  props: [
    "name",
    "emailAddress",
    "phoneNumber",
    "isFavorite",
  ],
  data() {
    return {
      detailsVisible: false,
      friendIsFavorite: this.isFavorite // we cannot mutate props in child that's why we set prop value to initial value in child component and then change my data property
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite =
          (this.friendIsFavorite === "1")
              ? "0"
              : "1"
    }
  },
}
</script>