myapp.controller('contrl3', ['$scope' ,'$localStorage','$http','$location',
  function ($scope,  $localStorage,$http,$location) {

    

  	$scope.content=["A personal trainer is a fitness professional involved in exercise prescription and instruction. They motivate clients by setting goals and providing feedback",
  	"Sport massage is essential for an athlete for his performance. ... About ROM : Range of Motion is a centre specialising in Sports injuries and joint related",
  	"Ayurvedic treatment in mumbai for slip disc, back pain, neck pain, arthritis, paralysis, spondylosis, stress, skin disorders, obesity and sleeplessness through ...",
  	"Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates. It is practiced worldwide, and especially in western countries such as ..."
  	];

  	$scope.images=["./images/personal-training.jpg","./images/Sport_massage.jpg","./images/aurvedic.jpg","./images/pilates.png"];

    $scope.error=false;

    if($localStorage.service){
      $scope.service_Select=$localStorage.service;
    }
    if($localStorage.instructions){
      $scope.instructions=$localStorage.instructions;
    }


    $scope.message=$scope.service_Select;
    changeData();

  $scope.select = function (instructions,serviceSelect) {
      var service=serviceSelect;
      if(service && service!=='' ){
        if(instructions && instructions!==''){
          console.log(service);
           $localStorage.service=service;
            $localStorage.instructions=instructions;
            $location.path('/date-select');
        }else{
          console.log("missing instructions");
          $scope.error=true;
          $scope.error_message="Please Fill in instructions";
        }
      }else{
        $scope.error=true;
          $scope.error_message="Please Select the Service";
         console.log("null");
      }
      

  };

  $scope.$watch('service_Select', function() {
    $scope.message=$scope.service_Select;
    changeData();
  });

  function changeData(){
  	switch($scope.service_Select){

  		case "personal_training" :{
  			$scope.description=$scope.content[0];
  			$scope.image=$scope.images[0];
  			break;
  		}

  		case "sports_massage" :{
  			$scope.description=$scope.content[1];
  			$scope.image=$scope.images[1];
  			break;
  		}

  		case "aurvedic_massage" :{
  			$scope.description=$scope.content[2];
  			$scope.image=$scope.images[2];
  			break;
  		}

  		case "pilates" :{
  			$scope.description=$scope.content[3];
  			$scope.image=$scope.images[3];
  			break;
  		}


  	}
  }

}]);