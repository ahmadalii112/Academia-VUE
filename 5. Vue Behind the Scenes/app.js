const app = Vue.createApp({
  data() {
    return {
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      // this.message = this.currentUserInput;
      // console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value // it points DOM object of <input type="text" ref="userText">
    },
  },
});

app.mount('#app');
