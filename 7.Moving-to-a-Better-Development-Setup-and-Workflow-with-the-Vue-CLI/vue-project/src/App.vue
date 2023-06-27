<template>
  <h2>Tekken 7 Characters</h2>
  <FriendContact/>
</template>

<script>
import FriendContact from "@/components/FriendContact.vue";
export default {
  name: "App",
  components: {FriendContact},
  data() {
    return {
      friends: [
        {
          id: "jin",
          name: "Jin Kazama",
          phone: '0321 5214569',
          email: 'jin.kazama@tekken.com',
        },
        {
          id: "nina",
          name: "Nina",
          phone: '+92 345159656',
          email: 'nina@tekken.com',
        },
      ]
    }
  },

};
</script>


<style scoped>

</style>
