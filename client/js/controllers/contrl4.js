myapp.controller('contrl4', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {


    $scope.service=$localStorage.service;
    $scope.times=$localStorage.time;
    $scope.dates=$localStorage.date;
    $scope.therapist_name=$localStorage.therapist_name;


    $scope.address_change=false;
    $scope.submit_button=true;
    $http({
        method: 'GET',
         url: '/api/booking/user/adress'
        })
        .success(function(response){
            console.log(response);
            $scope.predefined_address=true;
             $scope.defined_address=response.address;

               $scope.submit=function(){
            $localStorage.address=$scope.defined_address;
            console.log("saved");
          };

             $scope.session=true;

              $scope.show_change_address=function(){
          $scope.predefined_address=false;
          $scope.address_change=true;
          $scope.submit_button=false;
        };

        $scope.change_successful=function(address){
           $scope.defined_address=address;
           $scope.address_change=false;
           $scope.predefined_address=true;
           $scope.submit_button=true;
        };


            })


        .error(function(response){
          console.log("error");
          $scope.session=false;
           if($localStorage.name){
                $scope.name=$localStorage.name;
              }
              if($localStorage.email){
                $scope.email=$localStorage.email;
              }
              if($localStorage.phone){
                $scope.phone=$localStorage.phone;
              }
              if($localStorage.address){
                $scope.phone=$localStorage.phone;
              }


                    $scope.submit=function(name,email,phone,address){
                      console.log("clicked");
            $localStorage.name=name;
            $localStorage.email=email;
            $localStorage.phone=phone;
            $localStorage.address=address;
          };
        });



  }]);