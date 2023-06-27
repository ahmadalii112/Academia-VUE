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
  beforeCreate() {
    console.log("beforeCreate()"); // you cannot view anything
  },
  created() {
    console.log("Created()"); // Vue app initialized internally but not mounted yet, and we still not view anything
  },
  beforeMount() {
    console.log("before Mount"); // right before mount and we still not see anything
  },
  mounted() {
    console.log("mounted"); // now we view
  },
  beforeUpdate() {
    console.log("before update"); // any change in the data but do not view change on screen it runs just before mounted
  },
  updated() {
    console.log("updated()"); // we can view change data in the view
  },
  beforeUnmount() {
    console.log("before unmount")
  },
   unmounted() {
    console.log("unmounted")
  },
});

app.mount('#app');
app.unmount();