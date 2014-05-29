// Declare dependencies
module.exports['$inject'] = ['$scope', '$routeParams', '$filter', 'todoService'];

module.exports = function ($scope, $routeParams, $filter, todoService) {
    var retrieveTodos = function(){
        todoService.all().then(function(todos){
            $scope.todos = todos;
        });
    };

    $scope.newTodo = '';

    $scope.addTodo = function(){
        var newTodo = $scope.newTodo.trim();

        if(!newTodo) {
            return;
        }

        todoService.post({
            title: newTodo
        }).then(retrieveTodos);

        $scope.newTodo = '';
    };

    $scope.nextStatus = function(todo){
        todo.status = 'done';
        todoService.put(todo).then(retrieveTodos);
    };

    $scope.getStatusClass = function(status){
        return {
            'not started': 'todo-icon-not-started',
            'done': 'todo-icon-done'
        }[status];
    };

    retrieveTodos();
};
