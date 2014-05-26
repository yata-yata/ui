module.exports = function ($scope, $routeParams, $filter, todoStorage) {
    var todos = $scope.todos = todoStorage.get();
};
