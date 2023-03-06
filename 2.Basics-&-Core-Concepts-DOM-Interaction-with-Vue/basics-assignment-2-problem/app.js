const app = Vue.createApp({
  data() {
    return {
      output: "Type Here 👆",
      outputOnEnter: "Type Here 👆",
    };
  },
  methods: {
    showAlert() {
      alert("Alert Clicked! 😒")
    },
    changeInput(event){
      this.output = event.target.value;
    },
    clickEnter(event){
      this.outputOnEnter = event.target.value;
    }
  }
});
app.mount('#assignment');