myapp.controller('contrl2', ['$scope' ,'$localStorage','$http',
 function ($scope,  $localStorage,$http) {

  var userid_list;

  var newDataArray;


  var service=$localStorage.service;
  $scope.service=$localStorage.service;

    var config= {
   params: { service_type:service
      }
};
  var times=$localStorage.time;
  $scope.times=$localStorage.time;

  var dates=$localStorage.date;
  $scope.dates=$localStorage.date;
  
  console.log(times+dates);

  var config2= {
   params: { time: times,
        date:dates
      }
};
$http.get('/era',config2).success(function(response) {
    console.log("I got the data I requested");
    var st=response;
    console.log(st);

 userid_list = st.map(function(item){ return item.userid; });

 $http.get('/therapist_data',config).success(function(response) {
    console.log("I got the data I requested");
    var resdata=response;
 
   
    newDataArray = resdata.filter(function (item) {
    return userid_list.indexOf(item.userid) !== -1;


});

    $scope.therapist_list=newDataArray;
  });


   
  });
    console.log(userid_list);

     

     console.log(service);
   

    $scope.timess=$localStorage.time;

    $scope.datess=$localStorage.date;

    

  

    
   

    $scope.book=function(id,name,price){
      console.log(id);
      $localStorage.therapist_id=id;
      $localStorage.therapist_name=name;
      console.log(name);
}

   
    

}]);