const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "", // Whenever Name Changes The Watcher Method will Re-Execute
      lastName: "",
      // fullName: "",
    };
  },
  // You repeat data and computed property name as a method Name
  watch: {
    // watchers shines for these kind of behaviours we want
    counter(value){
      if (value >= 50 || value <= 0) {
        const that = this;
        setTimeout(function (){
         that.counter = 0;
        }, 2000)
      }
    }
    // name(newValue, OldValue)
   /* name(value) {
      if (value === "") {
        this.fullName =  "";
      }else {
        this.fullName = value + ' ' + this.lastName
      }
    },
    lastName(value){
      if (value === "") {
        this.fullName =  "";
      }else {
        this.fullName = this.name + ' ' + value
      }
    }*/
  },
  computed: {
    fullName() {
      console.log("Running Again!...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
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
