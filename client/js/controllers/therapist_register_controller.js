myapp.controller('therapist_register_controller', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {
 

  	$scope.register=function(){
  		 	var username=$scope.username;
		  	var name=$scope.name;
		  	var phone=$scope.phone;
		  	var gender=$scope.gender;
		  	var bio=$scope.bio;
		  	var password=$scope.password;
		  	var personal_training=$scope.personal_training;
		  	var price=$scope.price;
		  	var sports_message=$scope.sports_message;
		  	var pilates=$scope.pilates;
		  	var aurvedic_massage=$scope.aurvedic_massage;

  	
  		var data={
  			username:username,
  			name:name,
  			phone:phone,
  			gender:gender,
  			bio:bio,
  			password:password,
  			personal_training:personal_training,
  			price:price,
  			sports_message:sports_message,
  			pilates:pilates,
  			aurvedic_massage:aurvedic_massage

  		};

  		$http.post('/therapist-register', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                            	$scope.message="Registered successfully";
                             
                             }, 
                             function(response){
                               // failure callbac
                             }
                          );




  		  	}





  }]);