function TodoListService(hat) {
    var todoLists = [];
    this.save = function SaveTodoList(todoList, callback) {
        todoList.id = hat();
        todoLists.push(todoList);
        console.info(todoLists);
        return callback(undefined, todoList);
    };

     this.findAll = function FindAllTodo(callback){
      return callback(undefined,todoLists);
    };

    this.findById = function findById(id, callback){
      for(var i=0;i<todoLists.length;i++){
        if(id === todoLists[i].id){
          return callback(undefined,todoLists[i]);
        }
      }
          return callback(undefined,undefined);
    };

    return this;
}

module.exports = TodoListService;
