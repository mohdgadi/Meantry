
app.controller('checkoutController', [ '$scope' ,'$localStorage','$http','$location', function($scope,$localStorage,$http,$location) {

	
		$scope.name=$localStorage.name;
		$scope.time=$localStorage.time;
    console.log($localStorage.time);
         $scope.date=$localStorage.date;
		$scope.service=$localStorage.service;
		$scope.therapist_name=$localStorage.therapist_name;
		
		$scope.phone=$localStorage.phone;


			if($localStorage.address && $localStorage.name && $localStorage.email && $localStorage.phone){
            console.log("got name email phone address");
            var name=$localStorage.name;
            var email=$localStorage.email;
            var phone=$localStorage.phone;
            var address=$localStorage.address;
            $scope.address=$localStorage.address;
            $scope.phone=$localStorage.phone;

            if($localStorage.service){
                console.log("got service");
                var service=$localStorage.service;
                $scope.service=$localStorage.service;

                if($localStorage.time&&$localStorage.date){

                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  $scope.time=$localStorage.time;
                  $scope.date=$localStorage.date;
                  console.log("got date and time");

                  if($localStorage.therapist_id && $localStorage.therapist_name){
                    var therapist_id=$localStorage.therapist_id;
                     

                    console.log("got therapist id and name");

                }
                else{
                  console.log("No therapist selected");
                }}
                else{
                  console.log("did not get date and time");
                }
            }
            else{
              console.log("missing service");
            }
        
        
      

        }
        else{
            console.log("missing name/add/email/phone");
          }
		



	$scope.submit=function(){

					console.log("clicked");
					console.log(email);

                    var data={
                                therapist_id:therapist_id,
                                dates:date,
                                times:time,
                                address:address,
                                service:service,
                                name:name,
                                email:email,
                                phone:phone
                                };



                     $http.post('http://localhost:9000/ur-book', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                               $scope.summary="";

                               $scope.booking_message="Booked successfully";
                               console.log("Booked successfully");
                               delete $localStorage.time;
                               delete $localStorage.date;
                               delete $localStorage.therapist_id;
                               delete $localStorage.therapist_name;
                               $location.url('/app/home');

                             
                             }, 
                             function(response){
                               // failure callbac
                               console.log("Error occurred");
                               delete $localStorage.time;
                               delete $localStorage.date;
                               delete $localStorage.therapist_id;
                               delete $localStorage.therapist_name;
                               $location.url('/app/login');
                             }
                          );



                              };














        $scope.$on('$ionicView.enter', function() {
            $scope.name=$localStorage.name;
    $scope.time=$localStorage.time;
    console.log($localStorage.time);
         $scope.date=$localStorage.date;
    $scope.service=$localStorage.service;
    $scope.therapist_name=$localStorage.therapist_name;
    
    $scope.phone=$localStorage.phone;


      if($localStorage.address && $localStorage.name && $localStorage.email && $localStorage.phone){
            console.log("got name email phone address");
            var name=$localStorage.name;
            var email=$localStorage.email;
            var phone=$localStorage.phone;
            var address=$localStorage.address;
            $scope.address=$localStorage.address;
            $scope.phone=$localStorage.phone;

            if($localStorage.service){
                console.log("got service");
                var service=$localStorage.service;
                $scope.service=$localStorage.service;

                if($localStorage.time&&$localStorage.date){

                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  $scope.time=$localStorage.time;
                  $scope.date=$localStorage.date;
                  console.log("got date and time");

                  if($localStorage.therapist_id && $localStorage.therapist_name){
                    var therapist_id=$localStorage.therapist_id;
                     

                    console.log("got therapist id and name");

                }
                else{
                  console.log("No therapist selected");
                }}
                else{
                  console.log("did not get date and time");
                }
            }
            else{
              console.log("missing service");
            }
        
        
      

        }
        else{
            console.log("missing name/add/email/phone");
          }
    



  $scope.submit=function(){

          console.log("clicked");
          console.log(email);

                    var data={
                                therapist_id:therapist_id,
                                dates:date,
                                times:time,
                                address:address,
                                service:service,
                                name:name,
                                email:email,
                                phone:phone
                                };



                     $http.post('http://localhost:9000/ur-book', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                               $scope.summary="";

                               $scope.booking_message="Booked successfully";
                               console.log("Booked successfully");
                               delete $localStorage.time;
                               delete $localStorage.date;
                               delete $localStorage.therapist_id;
                               delete $localStorage.therapist_name;
                               $location.url('/app/home');

                             
                             }, 
                             function(response){
                               // failure callbac
                               console.log("Error occurred");
                               delete $localStorage.time;
                               delete $localStorage.date;
                               delete $localStorage.therapist_id;
                               delete $localStorage.therapist_name;
                               $location.url('/app/login');
                             }
                          );



                              };

        });

	}]);