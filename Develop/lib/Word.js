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
    let isCorrect = false; // Need to use a boolean variable to account for duplicate letters in a word
    for (let i in this.letters) {
        if (this.letters[i].guess(input)) {
            isCorrect = true;
        }
    }
    return isCorrect;
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

  toString() {
    // Overriding toString() to return the word with only visible letters showing
    let wordToShow = '';
    for (let i in this.letters) {
        wordToShow += this.letters[i].toString();
    }
    return wordToShow;
  }

  getSolution() {
    // Calling getSolution() on each letter to reveal the entire word
    let solution = '';
    for (let i in this.letters) {
        solution += this.letters[i].getSolution();
    }
    return solution;
  }
}

module.exports = Word;
