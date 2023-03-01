const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn vue!",
      vueLink: "https://vuejs.org",
    };
  },
  /*Methods allows function which should execute e.g like button click*/
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return (randomNumber < 0.5)
          ? "Learn Vue"
          : "Master Vue"
    }
  }


});
app.mount("#user-goal");