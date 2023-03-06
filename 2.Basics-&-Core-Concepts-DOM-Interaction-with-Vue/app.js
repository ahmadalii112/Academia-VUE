const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    /* when you point out a function an argument is also passed by default in JS
    setName(event){
        this.name = event.target.value;
      },*/
    setName(event, lastName) {
      this.name = `${event.target.value}  ${lastName}`;
    },
    add(num) {
      this.counter += num
    },
    reduce(num) {
      this.counter -= num
    },
    submitForm(){
      alert("Form Submitted")
    },
    confirmInput(){
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
