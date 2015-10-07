
    var app = angular.module('ToDoApp',[]);


app.controller('TaskController', ['$scope', function($scope) {
  $scope.title = 'MyToDoApp!';
    
    $scope.tasks = [];
    
    $scope.insert= function(task){
     
        var tl = angular.copy(task);
        tl.addedOn = new Date();
        $scope.tasks.push(tl);
        task.content = "";
        }
    
}]);