const { describe, it, before, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const { createSandbox } = require('sinon');

const TodoService = require('../src/todoService');

describe('todoService', () => {
  let todoService;
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

    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          list: sandbox.stub().returns(mockDatabase),
        }
      };

      todoService = new TodoService(dependencies);
    });

    it('should return data on a specific format');
  });
});
