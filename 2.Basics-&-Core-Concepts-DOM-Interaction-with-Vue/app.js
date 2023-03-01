const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "Finish the course and master vue!",
      vueLink: "https://vuejs.org",
    };
  },
  /*Methods allows function which should execute e.g like button click*/
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return (randomNumber < 0.5)
          ? this.courseGoalA
          : this.courseGoalB
    }
  }


});
app.mount("#user-goal");