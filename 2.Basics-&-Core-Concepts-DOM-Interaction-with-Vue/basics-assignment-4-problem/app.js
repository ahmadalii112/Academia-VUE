const app = Vue.createApp({
  data() {
    return {
      enteredUser: '',
      enterInput: '',
      isVisible: true,
    }
  },
  computed: {
    visible(){
      return this.isVisible === true ? 'visible' : 'hidden'
    },
    userClass() {
      if (this.enteredUser === 'Ahmad') {
        return {user1: true}
      } else if (this.enteredUser === 'Ali') {
        return {user2: true}
      }
    },
  }, methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }

});

app.mount("#assignment");