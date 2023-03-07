const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
    };
  },
  methods: {
    /* when you point out a function an argument is also passed by default in JS
    setName(event){
        this.name = event.target.value;
      },*/
    outputFullName() {
      console.log("Running Again!...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Ali";
    },
    setName(event) {
      this.name = `${event.target.value}`;
    },
    add(num) {
      this.counter += num
    },
    reduce(num) {
      this.counter -= num
    },

    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
