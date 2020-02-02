new Vue({
  el: '#app',
  data: {
    terroristLifePoints: 100,
    armyLifePoints: 100,
    startGame: true
  },
  methods: {
    g36c: function() {
      this.terroristLifePoints -= 15;
      this.armyLifePoints -= 10;
    },
    desertEagle: function() {
      this.terroristLifePoints -= 5;
      this.armyLifePoints -= 10;
    },
    heal: function() {
      this.terroristLifePoints += 5;
      this.armyLifePoints += 10;
    },
    tacticalNuke: function() {
      this.terroristLifePoints = 0;
      this.armyLifePoints = 0;
    }
  }
});
