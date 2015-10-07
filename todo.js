
    var app = angular.module('ToDoApp',[]);


app.controller('TaskController', ['$scope', function($scope) {
  $scope.title = 'MyToDoAppInitial!';
    
    $scope.tasks = [];
    
    $scope.insert= function(task){
     
        var tl = angular.copy(task);
        tl.addedOn = new Date();
        $scope.tasks.push(tl);
        task.content = "";
        }
    
    
    $scope.destroy = function(task){
        $scope.tasks.splice($scope.tasks.indexOf(task),1);   
    }
    
    $scope.myTask = new Firebase("https://burning-torch-3852.firebaseio.com/")
    
    $scope.saveTask = function(){
        $scope.myTask.push({tl:$scope.tasks}); 
    };
    
}]);

