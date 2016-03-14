
todoApp.controller('todoController', function($scope){

  $scope.storeInfo = function(){
    $scope.items.push($scope.stuff);
    $scope.stuff = null;
  };

});
