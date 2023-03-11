/* We Can Extract code of random damage formula outside the vue*/
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    }
  },
  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    },
  },
  methods: {
    attackMonster() {
      /*
      TODO:
       calculate the damage we're dealing,  we deal 5 to 12 point of damage so he formula is 👇
       decimalValue(randomNumber * (maxValue - minValue) + minValue)
      */
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer(); // When we attack monster then it attack back to player
    },
    attackPlayer() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue;

    }
  },
});

app.mount("#game")