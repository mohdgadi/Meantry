app.controller('ServiceController', [ '$scope' ,'$localStorage', function($scope,$localStorage) {

  $scope.formData = { service_Select: "sports_massage" };



  $scope.content=["A personal trainer is a fitness professional involved in exercise prescription and instruction. They motivate clients by setting goals and providing feedback",
    "Sport massage is essential for an athlete for his performance. ... About ROM : Range of Motion is a centre specialising in Sports injuries and joint related",
    "Ayurvedic treatment in mumbai for slip disc, back pain, neck pain, arthritis, paralysis, spondylosis, stress, skin disorders, obesity and sleeplessness through ...",
    "Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates. It is practiced worldwide, and especially in western countries such as ..."
    ];

    $scope.images=["./images/personal-training.jpg","./images/Sport_massage.jpg","./images/aurvedic.jpg","./images/pilates.png"];


    
    changeData();

  $scope.select = function () {
      var service=$scope.formData.service_Select;
      console.log(service);
      $localStorage.service=service;
  };

  $scope.$watch('formData.service_Select', function() {
    console.log("hi");
    $scope.message=$scope.formData.service_Select;
    changeData();
    
  });

    function changeData(){
    switch($scope.formData.service_Select){

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


  $scope.service_Proceed=function(){
    $localStorage.service=$scope.formData.service_Select;
    console.log($localStorage.service);
  };




}]);