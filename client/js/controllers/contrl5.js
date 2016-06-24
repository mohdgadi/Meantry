myapp.controller('contrl5', ['$scope' ,'$localStorage','$http', '$window',

  function ($scope,  $localStorage,$http,$window) {

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
            $scope.address=$localStorage.address;
            console.log("got address");

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
                  $scope.duration=duration;
                  $scope.times=$localStorage.time;
                  $scope.dates=$localStorage.date;

                    $scope.book=function(){

                    
                          $window.location.href = '/final';
                        
                       };


                  }

                else{
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
            $scope.address=$localStorage.address;

            if($localStorage.service && $localStorage.instructions){
                console.log("got service");
                var service=$localStorage.service;
                var instructions=$localStorage.instructions;

                if($localStorage.time&&$localStorage.date&&$localStorage.duration){

                  var time=$localStorage.time;
                  var date=$localStorage.date;
                  var duration=$localStorage.duration;
                  $scope.times=$localStorage.time;
                  $scope.duration=duration;
                  $scope.dates=$localStorage.date;
                  console.log("got date and time");

                 
                     $scope.book=function(){

                    

                               $window.location.href = '/final';

                              };

                    

                }
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
      
      $scope.date=$localStorage.date;
      $scope.time=$localStorage.time;

        });


      


  }]);