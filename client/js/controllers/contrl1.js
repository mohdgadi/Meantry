myapp.controller('contrl1', ['$scope' ,'$localStorage','$http', 'dateFilter','$filter','$location',
  function ($scope,  $localStorage,$http,dateFilter,$filter,$location) {

    $scope.error=false;
	$scope.check = function (duration,myDate,timeSelect,form) {


      if(form.$invalid){
        console.log("invalid");
        $scope.error_message="Please select date from the calender above!";
        $scope.error=true;
      }else{
        if(duration && duration!=='' && timeSelect && timeSelect!==''){
          

          var result = $filter('date')(myDate, 'dd-MMMM-yyyy');
          $localStorage.duration=duration;
          $localStorage.time=timeSelect;
          $localStorage.date=result;
          $location.path('/user-info');
        }else{
          $scope.error_message="Please select Duration and Time";
          $scope.error=true;
        }
      }
     
     

  
  

	
};

$scope.myDate = new Date();


  $scope.minDate = new Date();
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 1,
      $scope.myDate.getDate());

 

	$scope.service=$localStorage.service; 
	

}]);