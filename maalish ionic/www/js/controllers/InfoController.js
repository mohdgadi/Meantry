app.controller('InfoController', [ '$scope' ,'$localStorage','$location', function($scope,$localStorage,$location) {

	

	$scope.submit=function(username,name,phone,zip,address){

		if(username && name && phone && zip && address){
		console.log("proper");
		$localStorage.name=username;
		$localStorage.name=name;
		$localStorage.phone=phone;
		$localStorage.zip=zip;
		$localStorage.address=address;
		$location.url('/app/therapist');
	}else{
		
		$location.url('/app/info');
		console.log("improper");
		}
	};

}]);