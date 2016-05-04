app.controller('InfoController2', [ '$scope' ,'$localStorage','$location', function($scope,$localStorage,$location) {
  $scope.card=true;
  $scope.address="5845 Park Street New City, NY 10956";

		
  $scope.show_change_address=function(){

    $scope.card=!$scope.card;

  };

  $scope.change_address=function(address){
  	 $scope.card=!$scope.card;
  	 $scope.address=address;
  	 $localStorage.address=$scope.address;
  };


$scope.submit=function(address){
	if($scope.address){
		$location.url('/app/therapist');
	}else{
		$location.url('/app/info2');
	}
};
}]);