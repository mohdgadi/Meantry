myapp.controller('contrl6', ['$scope','$q','$localStorage','$http',
  function ($scope,$q,$localStorage,$http) {

    $scope.myXhr = function(){
    
     $http({
        method: 'GET',
         url: '/api/session_data'
        })
        .success(function(response){
            console.log(response);
            return response;
        })
        .error(function(response){
          console.log("error");
            throw new Error('ERROR');
        });
}
console.log("hi");

var myPromise = $scope.myXhr();
  myPromise.then(function(resolve){
        alert(resolve);
        console.log(resolve);
        }, function(reject){
        alert(reject);
        console.log(reject);      
    });


  }]);