myapp.controller('contrl5', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {

  $http({
        method: 'GET',
         url: '/api/booking/user'
        })
        .success(function(response){
          $scope.got_data=true;
          var name=response.name;
          var username=response.username;
          var phone=response.phone;

          if($localStorage.address){

            var address=$localStorage.address;
            console.log("got address");

            if($localStorage.service){

              var service=$localStorage.service;
                console.log("got service");

                if($localStorage.time&&$localStorage.date){

                  console.log("got time");
                  var time=$localStorage.time;
                  var date=$localStorage.date;

                  if($localStorage.therapist_id && $localStorage.therapist_name){
                    var therapist_id=$localStorage.therapist_id;

                    console.log("got therapist id and name");

                    $scope.book=function(){

                    var data={therapist_id:therapist_id,
                                dates:date,
                                times:time,
                                address:address,
                                service:service
                                };

                     $http.post('/era', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                               $scope.summary="";
                               $scope.booking_message="Booked successfully";
                             
                             }, 
                             function(response){
                               // failure callbac
                             }
                          );

                         
                        
                       }


                  }else{

                    console.log("missing therapist id and name");
                  }

                }else{
                  console.log("no date time");
                }

            }
            else{
                console.log("couldnt get service");
            }

          }
          else{
            var address=response.address;
            console.log("dint get addre");
          }

       $scope.name=response.name;
      $scope.email=response.username;
      $scope.phone=response.phone;
      $scope.service=$localStorage.service;
      $scope.therapist_name=$localStorage.therapist_name;
      $scope.date=$localStorage.date;
      $scope.time=$localStorage.time;

             })


        .error(function(response){
          $scope.got_data=true;

          if($localStorage.address && $localStorage.name && $localStorage.email && $localStorage.phone){
            console.log("got name email phone address");
            var name=$localStorage.name;
            var email=$localStorage.email;
            var phone=$localStorage.phone;
            var address=$localStorage.address;

            if($localStorage.service){
                console.log("got service");
                var service=$localStorage.service;

                if($localStorage.time&&$localStorage.date){

                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  console.log("got date and time");

                  if($localStorage.therapist_id && $localStorage.therapist_name){
                    var therapist_id=$localStorage.therapist_id;
                     $scope.book=function(){

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



                     $http.post('/ur-book', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                               $scope.summary="";
                               $scope.booking_message="Booked successfully";
                             
                             }, 
                             function(response){
                               // failure callbac
                             }
                          );



                              }

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

          $scope.name=$localStorage.name;
      $scope.email=$localStorage.email;
      $scope.phone=$localStorage.phone;
      $scope.service=$localStorage.service;
      $scope.therapist_name=$localStorage.therapist_name;
      $scope.date=$localStorage.date;
      $scope.time=$localStorage.time;

        });


      


  }]);