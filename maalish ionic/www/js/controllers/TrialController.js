app.controller('TrialController', [ '$scope' ,'$localStorage','$location','$http', function($scope,$localStorage,$location,$http) {

	 $http.post('http://localhost:9000/api/mobile/try')
                         .then(
                             function(response){
                               // success callback
                               console.log("posted successfully");
                              

                               
                               

                             
                             }, 
                             function(response){
                               // failure callbac
                               console.log("Error occurred");
                               
                               // $location.url('/app/login');
                             }
                          );

                    
             

}]);