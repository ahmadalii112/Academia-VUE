const app = Vue.createApp({
  data() {
    return {
      enteredInputValue: '',
      tasks: [],
      isVisible: true,
    }
  },
  computed: {
    buttonText() {
      return this.isVisible === true ? 'Hide List' : "Show List"

    }
  },
  methods: {
    addTask() {
      if (this.enteredInputValue === '') {
        return;
      }
      this.tasks.push(this.enteredInputValue);
      this.enteredInputValue = '';
    },
    toggle() {
      this.isVisible = !this.isVisible
    }
  }

});

app.mount('#assignment');