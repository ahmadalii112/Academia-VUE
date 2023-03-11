const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      person: {
        'Name': 'Ahmad',
        'Age': 25,
        'MaritalStatus': "Un-Married"
      }
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
