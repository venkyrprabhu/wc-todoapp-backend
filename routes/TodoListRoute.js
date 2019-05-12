function TodoListRoute(express, stubTodoListModel, todoListService) {
    var router = express.Router();

    router.post('/', function(req, res) {

        var name = req.body.name;
        var description = req.body.description;

        var todoList = new stubTodoListModel(name, description);
        console.info("In Route : name = "+name+" ; description = "+description);
        // return res.status(201).send(todoListService.save(todoList));
        todoListService.save(todoList, (err, savedTodoList) => {
            if(err) {
                console.error(err);
                return res.status(500).send();
            }

            return res.status(201).send(savedTodoList);
        });
    });

    router.get('/', function(req,res){

      todoListService.findAll((err,todoLists) => {
        if(err){
          console.error(err);
          return res.status(500).send();
        }
          return res.status(200).send({todoLists: todoLists});
    });
});

    router.get('/id/:todoListId', function (req,res){
       var id = req.params.todoListId;
       todoListService.findById(id, (err,todoList) => {
          if(err){
            console.error(err);
            return res.status(500).send();
          }
            return res.status(200).send(todoList);
       });
    });

     return router;

}

module.exports = TodoListRoute;
