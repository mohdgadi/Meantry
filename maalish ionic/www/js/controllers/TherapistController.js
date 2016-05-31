app.controller('TherapistController', [ 'List','$scope' ,'$localStorage','$location','$http', function(List,$scope,$localStorage,$location,$http) {

	var data=List;
	var userid_list = data.map(function(item){ return item.userid; });
            console.log(userid_list);
          var service=$localStorage.service;
          var config= {
                       params: { service_type:service
                          }
                      };

                   $http.get('http://localhost:9000/therapist_data',config).success(function(response) {
                      console.log("I got the data I requested");

                      var newDataArray = response.filter(function (item) {
                      return userid_list.indexOf(item.userid) !== -1;
                    });
                	
                	$scope.therapist_list=newDataArray;
    				console.log(newDataArray);
                    });


           $scope.select=function(id,name){

           	
           		$localStorage.therapist_id=id;
           		$localStorage.therapist_name=name;
           		$location.url('/app/checkout');
           };

                    
             

}]);