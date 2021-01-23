class TodoService {
  constructor({ todoRepository }) {
    this.todoRepository = todoRepository;
  }
  
    list(query) {
      return this.todoRepository.list().map(({ meta, $loki, ...result }) => result);
    }
  
  create(todoItem) {
    console.log('item-', isNaN(todoItem.when))
    if (!todoItem.isValid()) {
      return {
        error: {
          message: 'invalid data',
          data: todoItem,
        },
      };
    }
  }
}

module.exports = TodoService;
