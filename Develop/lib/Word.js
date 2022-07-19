const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [];
    for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }

  }
}

module.exports = Word;
