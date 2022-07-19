class Letter {
  constructor(letter) {
    const letterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitList = '1234567890';

    this.char = letter;
    // Visible indicated whether the letter should be visible
    // Letters that have been guessed will be visible
    // Letters that are not in letterList or digitList are automatically visible
    this.visible = false;
    if (letterList.indexOf(this.char) == -1 && digitList.indexOf(this.char) == -1) {
      this.visible = true;
    }
  }

  toString() {
    // Overriding toString() to return the letter only if it is visible 
    if (this.visible) {
        return this.char;
    }
    return '_';
  }

  guess(guess) {
    // If the user's guess is correct, makes the letter visible and returns true
    if (this.char.toLowerCase() == guess.toLowerCase()) { // Setting both to lowercase to make guesses case insensitive
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
