function TodoListService(hat) {
    var todoLists = [];
    this.save = function SaveTodoList(todoList, callback) {
        todoList.id = hat();
        todoLists.push(todoList);
        console.info(todoLists);
        return callback(undefined, todoList);
    };

    return this;
}

module.exports = TodoListService;
