const app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  watch: {
    result(){
      console.log("Watcher Executed")
      const that = this
      setTimeout(function (){
        that.number = 0
      },3000)
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not There Yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too Much!";
      }
    }
  },
  methods: {
    add(value) {
      this.number += value;
    },
  }
});

app.mount('#assignment');