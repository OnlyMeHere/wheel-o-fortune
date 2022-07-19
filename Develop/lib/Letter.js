class Letter {
  constructor(letter) {
    const letterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitList = '1234567890';

    this.letter = letter;
    this.visible = false;
    if (letterList.indexOf(this.letter) == -1 && digitList.indexOf(this.letter) == -1) {
      this.visible = true;
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
