class Rocket{
    constructor(color, size) {
      this.color = color;
      this.size = size;
    }
    
    launch () {
      console.log('3, 2, 1, blastoff!');
    };

    engageSecondryEngines () {
      console.log('Secondary Engines Engaged!');
    };
  }
  
  module.exports = Rocket;