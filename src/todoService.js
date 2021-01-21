class TodoService {
  constructor({ todoRepository }) {
    this.todoRepository = todoRepository;
  }

  create(todoItem) {}

  list(query) {}
}

module.exports = TodoService;
