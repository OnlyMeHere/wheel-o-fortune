class Letter {
  constructor(letter) {
    const letterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitList = '1234567890';

    this.letter = letter;
    this.visible = true;
    for (let x in letterList) {
      if (letterList[x] == this.letter) {
        this.visible = false;
      }
    }
    for (let x in digitList) {
      if (letterList[x] == this.letter) {
        this.visible = false;
      }
    }
  }

  toString() {
    if (this.visible) {
        return this.letter;
    }
    return '_';
  }

  guess(guess) {
    if (this.letter == guess) {
      return true;
    }
    return false;
  }

  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
