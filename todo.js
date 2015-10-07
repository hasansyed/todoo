
    var app = angular.module('ToDoApp',['firebase']);


app.controller('TaskController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    $scope.title = 'MyToDoAppInitial!';
        
    // add reference to firebase collection -- mine is zeddotes/test
    var ref = new Firebase("https://zeddotes.firebaseio.com/test");

    // if $firebaseArray(ref) returns empty, just use a new array instead
    $scope.tasks = $firebaseArray(ref) || [];

    // clear the default
    $scope.newTask = {};

    // main adding method which will check if $scope.newTask exists and add to firebase.
    // it should also clean out the $scope.newTask form
    $scope.addTask = function(){
      if ($scope.newTask){
        // firebase method to add data
        $scope.tasks.$add({
          addedOn: $.now(),
          content: $scope.newTask.content
        });

        $scope.newTask = {};
      }
    };

    // $scope.insert= function(task){
     
    //     var tl = angular.copy(task);
    //     tl.addedOn = new Date();
    //     // $scope.tasks.push(tl);
    //     $scope.tasks.$add(tl);
    //     task.content = "";
    //     }
    
    
    $scope.destroy = function(task){
        $scope.tasks.splice($scope.tasks.indexOf(task),1);   
    }
}]);