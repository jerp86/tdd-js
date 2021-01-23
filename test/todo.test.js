const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const { createSandbox } = require('sinon');

const Todo = require('../src/todo');

describe('todo', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = createSandbox();
  });

  afterEach(() => sandbox.restore());

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
      const expectedId = '000001';
      
      const uuid = require('uuid');
      const fakeUUID = sandbox.fake.returns(expectedId);
      sandbox.replace(uuid, uuid.v4.name, fakeUUID);

      const todo = new Todo(data);
      const expectedItem = {
        text: data.text,
        when: data.when,
        status: '',
        id: expectedId,
      };
      const result = todo.isValid();

      expect(result).to.be.ok;
      expect(uuid.v4.calledOnce).to.be.ok;
      expect(todo).to.be.deep.equal(expectedItem);
    });
  });
});
