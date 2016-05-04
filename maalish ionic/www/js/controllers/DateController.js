
app.controller('DateController', [ '$scope' ,'$localStorage','dateFilter','$filter', function($scope,$localStorage,dateFilter,$filter) {

	$scope.time="9/10";

	var dates=new Date();
	 $scope.minDate=$filter('date')(dates, 'dd/MM/yyyy');

	 $scope.date=$filter('date')(dates, 'dd/MM/yyyy');

	$scope.date_Proceed=function(){
		
		$localStorage.date=$scope.date;
		$localStorage.time=$scope.time;
		console.log($localStorage.date+$localStorage.time);

	};

	}]);