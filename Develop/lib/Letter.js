class Letter {
  constructor(letter) {
    const letterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitList = '1234567890';

    this.char = letter;
    this.visible = false;
    if (letterList.indexOf(this.char) == -1 && digitList.indexOf(this.char) == -1) {
      this.visible = true;
    }
  }

  toString() {
    if (this.visible) {
        return this.char;
    }
    return '_';
  }

  guess(guess) {
    if (this.char == guess) {
      this.visible = true;
      return true;
    }
    return false;
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
