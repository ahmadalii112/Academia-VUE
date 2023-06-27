<template>
  <section>
    <header><h1>Tekken 7 Characters</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <FriendContact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :email-address="friend.email"
          :phone-number="friend.phone"
          :is-favorite="friend.isFavorite"
          @toggle-favorite="toggleFavoriteStatus"
      />
    </ul>

  </section>
</template>

<script>
import FriendContact from "@/components/FriendContact.vue";
import NewFriend from "@/components/NewFriend.vue";

export default {
  name: "App",
  components: {NewFriend, FriendContact},
  data() {
    return {
      friends: [
        {
          id: "jin",
          name: "Jin Kazama",
          phone: '0321 5214569',
          email: 'jin.kazama@tekken.com',
          isFavorite: true,
        },
        {
          id: "nina",
          name: "Nina",
          phone: '+92 345159656',
          email: 'nina@tekken.com',
          isFavorite: false,
        },
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const friendIdentified = this.friends.find((friend) => friend.id === friendId);
      friendIdentified.isFavorite = !friendIdentified.isFavorite;
    },
    addContact(name, email, phone) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone
      }
      this.friends.push(newFriend);
    }
  },

};
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>
