class TodoService {
  constructor({ todoRepository }) {
    this.todoRepository = todoRepository;
  }

  list(query) {
    return this.todoRepository.list().map(({ meta, $loki, ...result }) => result);
  }
  
  create(todoItem) {}
}

module.exports = TodoService;
