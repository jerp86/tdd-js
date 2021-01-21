const { describe, it, before } = require('mocha');
const { expect } = require('chai');

const TodoRepository = require('../src/todoRepository');

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

describe('todoRepository', () => {
  describe('methods signature', () => {
    it('should call insertOne from lokijs');

    it('should call find from lokijs');
  })
});
