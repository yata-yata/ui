module.exports = function($http) {
    return {
        all: function(){
            $http.get('/api/todos').then(function(result){
                return result.data;
            });
        },
        get: function (id){
            $http.get('/api/todos/' + id).then(function(result){
                return result.data;
            });
        },
        post: function(todo){
            $http.post('/api/todos', todo).then(function(result){
                return result.data;
            });
        },
        put: function (todo){
            $http.put('/api/todos/' + todo.id, todo).then(function(result){
                return result.data;
            });
        },
        destroy: function(id){
            $http.delete('/api/todos/' + id).then(function(result){
                return result.data;
            });
        }
    };
};
