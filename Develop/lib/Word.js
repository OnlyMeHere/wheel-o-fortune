const Letter = require("./Letter");

class Word {
  constructor(word) {
    // A Word object contains an array of Letter objects
    this.letters = [];
    for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }
  }

  guessLetter(input) {
    // Returning true or false based on whether the user guessed the correct letter
    for (let i in this.letters) {
        if (this.letters[i].guess(input)) {
            return true;
        }
    }
    return false;
  }

  guessedCorrectly() {
    // Returning true or false based on whether all letters have been guessed
    for (let i in this.letters) {
        if (this.letters[i].visible == false) {
            return false;
        }
    }
    return true;
  }
}

module.exports = Word;
