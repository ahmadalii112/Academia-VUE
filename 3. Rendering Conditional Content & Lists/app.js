const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.unshift(this.enteredGoalValue)
      this.enteredGoalValue = ''
    }
  }
});

app.mount('#user-goals');
