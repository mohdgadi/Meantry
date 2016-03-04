myapp.controller('contrl3', ['$scope' ,'$localStorage','$http',
  function ($scope,  $localStorage,$http) {

    if($localStorage.service){
      $scope.service_Select=$localStorage.service;
    }

  $scope.select = function () {
      var service=$scope.service_Select;
      console.log(service);
      $localStorage.service=service;
  };



}]);