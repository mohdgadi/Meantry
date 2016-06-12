myapp.controller('checkoutController', ['$scope' ,'$localStorage','$http','$window',

  function ($scope,  $localStorage,$http,$window) {

  	$scope.details=false;



  	$http({
        method: 'GET',
         url: '/api/booking/user'
        })
        .success(function(response){

        	if($localStorage.service && $localStorage.instructions){
  		var service=$localStorage.service;
              $scope.service=$localStorage.service;
              var instructions=$localStorage.instructions;
                console.log("got service");

        if($localStorage.time&&$localStorage.date&&$localStorage.duration){

                  console.log("got time");
                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  var duration=$localStorage.duration;
                  $scope.times=$localStorage.time;
                  $scope.dates=$localStorage.date;

            if($localStorage.address){

            var address=$localStorage.address;
            $scope.address=$localStorage.address;
            console.log("got address");

            var config={
            	params:{
            		service:service,
            		duration:duration,
            		address:address,
            		instructions:instructions,
            		time:time,
            		date:date
            	}
            };

            $http.get('/api/finalr',config).success(function(response) {
            	console.log(response.hash);
            	$scope.key=response.key;
            	$scope.hash=response.hash;
            	$scope.txnid=response.txnid;
            	$scope.amount=response.amount;
            	$scope.name=response.name;
            	$scope.phone=response.phone;
            	$scope.email=response.email;
            	$scope.info=response.info;
            	$scope.surl=response.surl;
            	$scope.furl=response.furl;
            	$scope.time=response.time;
            	$scope.duration=response.duration;
            	$scope.instructions=response.instructions;
            	$scope.address=response.address;
            	$scope.date=response.date;
            	$scope.authentication=response.authentication;
            	$scope.details=true;

            }).error(function(response){
            	console.log("error");
            });


        }else{
        	$window.location.href = '/user_info';
        }


              }else{
              		$window.location.href = '/date-select';
              }
  	}else{
  		console.log("Service error");
  		$window.location.href = '/service_type';
  	}


        })

















        .error(function(response){

        	if($localStorage.service && $localStorage.instructions){
  			var service=$localStorage.service;
              $scope.service=$localStorage.service;
              var instructions=$localStorage.instructions;
                console.log("got service");


                if($localStorage.time&&$localStorage.date&&$localStorage.duration){

                  console.log("got time");
                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  var duration=$localStorage.duration;
                  $scope.times=$localStorage.time;
                  $scope.dates=$localStorage.date;

                  if($localStorage.address && $localStorage.name && $localStorage.email && $localStorage.phone){
		            console.log("got name email phone address");
		            var name=$localStorage.name;
		            var email=$localStorage.email;
		            var phone=$localStorage.phone;
		            var address=$localStorage.address;
		            $scope.address=$localStorage.address;

			            var config={
			            	params:{
			            		service:service,
			            		duration:duration,
			            		address:address,
			            		name:name,
			            		phone:phone,
			            		email:email,
			            		instructions:instructions,
            					time:time,
            					date:date
			            	}
			            };

			     $http.get('/api/finalur',config).success(function(response) {
            	console.log(response.hash);
            	$scope.key=response.key;
            	$scope.hash=response.hash;
            	$scope.txnid=response.txnid;
            	$scope.amount=response.amount;
            	$scope.name=response.name;
            	$scope.phone=response.phone;
            	$scope.email=response.email;
            	$scope.info=response.info;
            	$scope.surl=response.surl;
            	$scope.furl=response.furl;
            	$scope.time=response.time;
            	$scope.duration=response.duration;
            	$scope.instructions=response.instructions;
            	$scope.address=response.address;
            	$scope.date=response.date;
            	$scope.authentication=response.authentication;
            	$scope.details=true;

            }).error(function(response){
            	console.log("error");
            });



		        }else{
		        	console.log("Personal data is missing");
		        	$window.location.href = '/user_info';
		        }




              }else{

              	$window.location.href = '/date-select';
              }

            }else{
            	console.log("Service error");
  				$window.location.href = '/service_type';
            }



        });


  	

}]);