const { describe, it, before } = require('mocha');
const { expect } = require('chai');

const Todo = require('../src/todo');

describe('todo', () => {
  describe('#isValid', () => {
    it('should return invalid when creating an object without text', () => {
      const data = {
        text: '',
        when: new Date("2021-01-21"),
      };

      const todo = new Todo(data);
      const result = todo.isValid();

      expect(result).to.be.not.ok;
    });

    it('should return invalid when creating an object using "when" property invalidy', () => {
      const data = {
        text: 'Hello World',
        when: new Date("20-01-21"),
      };

      const todo = new Todo(data);
      const result = todo.isValid();

      expect(result).to.be.not.ok;
    });

    it('should have "id", "text", "when" and "status" properties after creating object', () => {
      const data = {
        text: 'Hello World',
        when: new Date("2021-01-21"),
      };

      const todo = new Todo(data);
      const result = todo.isValid();

      expect(result).to.be.ok;
    });
  });
});
