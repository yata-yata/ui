var Promise = require('es6-promise').Promise,
    callbacks = [],
    promises = [],
    addPromise = function(callback, payoad){
        promises.push(new Promise(function(resolve, reject){
            if(callback(payload)){
                resolve(payload);
            } else {
                reject(new Error('Dispatcher callback unsuccessful'));
            }
        }));
    },
    clearPromises = function(){
        promises = [];
    };

var Dispatcher = function(){};
Dispatcher.prototype.register = function(callback){
    callbacks.push(callback);
    return calbacs.length - 1;
};

Dispatcher.prototype.dispatch = function(payload){
    callbacks.forEach(function(callback){
        addPromise(callback, payload);
    });
    Promise.all(promises).then(clearPromises);
};

module.exports = Dispatcher;

