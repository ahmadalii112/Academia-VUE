/* We Can Extract code of random damage formula outside the vue*/
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
    }
  },
  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A Draw
        this.winner = 'draw'
      } else if (value <= 0) {
        // Player Lost
        this.winner = 'monster'
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A Draw
        this.winner = 'draw'
      } else if (value <= 0) {
        // Monster Lost
        this.winner = 'player'
      }
    },
  },
  methods: {
    attackMonster() {
      /*
      TODO:
       calculate the damage we're dealing,  we deal 5 to 12 point of damage so he formula is 👇
       decimalValue(randomNumber * (maxValue - minValue) + minValue)
      */
      this.currentRound++
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer(); // When we attack monster then it attack back to player
    },
    attackPlayer() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue;

    },
    specialAttackMonster(){
      this.currentRound++
      // It can only be available every three round if it is not available button should be disabled
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++
      const healValue = getRandomValue(8, 20)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();


    }
  },
});

app.mount("#game")