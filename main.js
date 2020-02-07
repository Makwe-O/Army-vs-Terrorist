new Vue({
  el: '#app',
  data: {
    terroristLifePoints: 100,
    armyLifePoints: 100,
    startGame: true,
    page: true
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
    reset: function() {
      this.terroristLifePoints = 100;
      this.armyLifePoints = 100;
      this.page = true;
    },
    tacticalNuke: function() {
      this.page = !this.page;
      setTimeout(() => {
        alert(
          'You actually used the nuke. You broke the game. Kindly refresh to reset'
        );
      }, 3000);
    },
    giveUp: function() {
      this.reset();
      alert('You Scumbag, you gave up. You are a disgrace to you country');
    }
  },
  watch: {
    terroristLifePoints: function() {
      if (this.terroristLifePoints <= 0) {
        this.reset();
        alert('Congrats you won!!!!');
        this.startGame = true;
      }
    },
    armyLifePoints: function() {
      if (this.armyLifePoints <= 0) {
        this.reset();
        alert('How TF did you let the Terrorists Win...');
        this.startGame = true;
      }
    }
  }
});
