const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected
        console.log(this.boxASelected, 'A');
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected
        console.log(this.boxASelected, 'B');
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected
        console.log(this.boxASelected, 'C');
      }
    }
  }
});

app.mount('#styling');