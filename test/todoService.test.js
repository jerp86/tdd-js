const { describe, it, before, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const { createSandbox } = require('sinon');

const TodoService = require('../src/todoService');
const Todo = require('../src/todo');

describe('todoService', () => {
  let sandbox;

  before(() => {
    sandbox = createSandbox()
  });

  describe('#list', () => {
    const mockDatabase = [
      {
        name: 'Xuxa da Silva',
        age: 90,
        meta: { revision: 0, created: 1611220616093, version: 0 },
        '$loki': 1
      },
    ];

    let todoService;
    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          list: sandbox.stub().returns(mockDatabase),
        }
      };

      todoService = new TodoService(dependencies);
    });

    it('should return data on a specific format', () => {
      const result = todoService.list();
      const [{ meta, $loki, ...expected }] = mockDatabase;

      expect(result).to.be.deep.equal([expected]);
    });
  });

  describe('#create', () => {
    let todoService;
    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          create: sandbox.stub().returns(true),
        }
      };

      todoService = new TodoService(dependencies);
    });

    it('shouldn\'t save todo item with invalid data', () => {
      const data = new Todo({
        text: '',
        when: ''
      });

      // O Reflect é mais performático do que o "delete data.id"
      Reflect.deleteProperty(data, 'id');

      const expected = {
        error: {
          message: 'invalid data',
          data: data,
        },
      };

      const result = todoService.create(data);

      expect(result).to.be.deep.equal(expected);
    });
    
    it('should save todo item with late status when the property is further than today');
    
    it('should save todo item with pending status');
  });
});
