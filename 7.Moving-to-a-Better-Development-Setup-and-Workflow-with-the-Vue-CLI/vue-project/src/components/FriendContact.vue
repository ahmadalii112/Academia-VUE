<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show Details' }}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>
<script>
export default {
  name: 'friend-contact',
  // props: ["name", "emailAddress", "phoneNumber", "isFavorite",],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // }
    },
    emits: ['toggle-favorite', 'delete'],
    // Or we validate events like this
    // emits: {
    //   'toggle-favorite': function (id) {
    //     if (id) {
    //       return true;
    //     }else {
    //       console.warn("Id is Missing");
    //       return false
    //     }
    //   }
    // },
  },
  data() {
    return {
      detailsVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite
      // Now we are emit an event
      this.$emit('toggle-favorite' , this.id)
    }
  },
}
</script>