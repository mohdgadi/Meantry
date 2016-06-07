myapp.controller('contrl1', ['$scope' ,'$localStorage','$http', 'dateFilter','$filter',
  function ($scope,  $localStorage,$http,dateFilter,$filter) {

	$scope.check = function (duration) {
  
    var times=$scope.timeSelect;
    var dates=$scope.date;
    $localStorage.duration=duration;
    console.log($localStorage.duration);
	$localStorage.time=$scope.timeSelect;
  $localStorage.date=$scope.date;
  var config2= {
   params: { time: times,
        date:dates
      }};

	
};

	$scope.service=$localStorage.service; 
	

}]);