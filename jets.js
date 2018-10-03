class Jet {
  constructor(color, size){
    this.color = color;
    this.size = size;
  }
  takeOff () {
    console.log('lift off!');
  }
  fly () {
    console.log('whoosh!');
  };
}

module.exports = Jet;