const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [];
    for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }
  }

  guessLetter(input) {
    for (let i in this.letters) {
        if (this.letters[i].guess(input)) {
            return true;
        }
    }
    return false;
  }
}

module.exports = Word;
