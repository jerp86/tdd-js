const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai');
const { createSandbox } = require('sinon');

const TodoRepository = require('../src/todoRepository');

describe('todoRepository', () => {
  let todoRepository;
  let sandbox;

  before(() => {
    todoRepository = new TodoRepository();
    sandbox = createSandbox()
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('methods signature', () => {
    it('should call find from lokijs', () => {
      const mockDatabase = [
        {
          name: 'Xuxa da Silva',
          age: 90,
          meta: { revision: 0, created: 1611220616093, version: 0 },
          '$loki': 1
        },
        {
          name: 'Joaozinho',
          age: 50,
          meta: { revision: 0, created: 1611220616094, version: 0 },
          '$loki': 2
        }
      ];
      
      const functionName = 'find';
      const expectedReturn = mockDatabase;

      sandbox.stub(
        todoRepository.schedule,
        functionName,
      ).returns(expectedReturn);

      const result = todoRepository.list();
      expect(result).to.be.deep.equal(expectedReturn);
      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok;
    });
    
    it('should call insertOne from lokijs', () => {
      const functionName = 'insertOne';
      const expectedReturn = true;

      sandbox.stub(
        todoRepository.schedule,
        functionName,
      ).returns(expectedReturn);

      const data = { name: 'José Eduardo' };

      const result = todoRepository.create(data);

      expect(result).to.be.ok;
      expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok;
    });
  })
});
