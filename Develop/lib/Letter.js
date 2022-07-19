class Letter {
  constructor(letter) {
    const letterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitList = '1234567890';

    this.letter = letter;
    if (letterList.search(letter) == -1 && digitList.search(letter) == -1) {
        this.visible = true;
    } else {
        this.visible = false;
    }
  }

  toString() {
    if (this.visible) {
        return this.letter;
    } else {
        return '_';
    }
  }

  guess() {
    
  }

  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
