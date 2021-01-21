const uuid = require('uuid');

class Todo {
  constructor({ text, when }) {
    this.text = text;
    this.when = when;

    this.status = '';
    this.id = uuid.v4();
  }

  isValid() {
    // !!- transforma a variável em booleano
    // 0 ou "" ou false são valores falsos
    return !!this.text;
  }
}

module.exports = Todo;
