// Declare dependencies
module.exports['$inject'] = ['$scope', '$routeParams', '$filter', 'todoService'];

module.exports = function ($scope, $routeParams, $filter, todoService) {
    todoService.all().then(function(todos){
        $scope.todos = todos;
    });
};
