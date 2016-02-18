chichiapp.controller('mycontrl', ['$scope','$http', function ($scope, $http) {

	 $scope.therapist_list="";

	 $scope.book=function(id){
		 	console.log(id);

		 	var date= $scope.dateSelect;
		 	 var time=$scope.timeSelect;

		 	var data={therapist_id:id,
		 				dates:date,
		 			  times:time};

		 	$http.post('/era', data)
	   .then(
	       function(response){
	         // success callback
	         console.log("posted successfully");
	         $scope.booking_message="Booked successfully";
	         $scope.dateSelect="";
		 	$scope.timeSelect="";
		 	$scope.therapist_list="";
	       }, 
	       function(response){
	         // failure callback
	       }
	    );
	 	
	 }







$scope.check = function () {
	var times=$scope.timeSelect;
	var dates=$scope.dateSelect;
	$scope.booking_message="";
	var config= {
	 params: { time: times,
				date:dates
			}
};
$http.get('/era',config).success(function(response) {
    console.log("I got the data I requested");
    $scope.therapist_list = response;

  });

	
   
}

}
]
);

