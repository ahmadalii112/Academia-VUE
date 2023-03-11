const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: ["learn Vue", "Master Vue", "Finish The Course"],
      person: {
        'Name': 'Ahmad',
        'Age': 25,
        'MaritalStatus': "Un-Married"
      }
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue === '') {
        return;
      }
      this.goals.unshift(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
