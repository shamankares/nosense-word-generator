export class WordGenerator {
  constructor(vocals = 'aiueo', consonants = 'bcdfghjklmnpqrstvwxyz') {
    this.vocals = vocals;
    this.consonants = consonants;
    this.rules = {
      'V': () => this._pickLetter(vocals),
      'C': () => this._pickLetter(consonants),
    };
  }

  _pickLetter(phone) {
    const length = phone.length
    const idx = Math.floor(Math.random() * length)
    return phone[idx]
  }

  generateWord(pattern) {
    return [...pattern]
      .map((letter) => this.rules[letter]())
      .join('');
  }
}
