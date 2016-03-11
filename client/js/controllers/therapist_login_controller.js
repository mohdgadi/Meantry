myapp.controller('therapist_login_controller', ['$scope' ,'$localStorage','$http', '$window',
  function ($scope, $localStorage,$http,$window) {


  		$scope.login=function(){
  		$scope.message="";
  		console.log($scope.username+$scope.password);

  		var data={
  			username:$scope.username,
  			password:$scope.password
  		};

  		console.log(data);


			$http.post('/api/therapist-login', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("logged in successfully");
                                $window.location.href = '/therapist-home';

                            	
                             
                             }, 
                             function(response){
                               // failure callbac
                               $scope.message="Invalid username or password"
                               console.log("error");
                             }
                          );


  			
  		}
 
  }]);