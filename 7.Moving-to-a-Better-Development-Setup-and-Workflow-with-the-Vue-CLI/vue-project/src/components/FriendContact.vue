<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'friend-contact',
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "jin",
        name: "Jin Kazama",
        phone: '0321 5214569',
        email: 'jin.kazama@tekken.com',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  },
}
</script>