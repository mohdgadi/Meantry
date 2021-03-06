// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic', 'pickadate','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller("SplashController", function($scope, $ionicSlideBoxDelegate,$ionicSideMenuDelegate) {
    $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    };

    $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/home.html'
  })

  .state('app.splash', {
    url: '/splash',
    views: {
      'menuContent': {
        templateUrl: 'templates/splash.html'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html'
      }
    }
  })
  .state('app.book', {
    url: '/book',
    views: {
      'menuContent': {
        templateUrl: 'templates/book.html'
      }
    }
  })
  .state('app.service', {
    url: '/service',
    views: {
      'menuContent': {
        templateUrl: 'templates/service.html',
        controller: 'ServiceController'
      }
    }
  })
  .state('app.date', {
    url: '/date',
    views: {
      'menuContent': {
        templateUrl: 'templates/date.html',
        controller: 'DateController'
      }
    }
  })
  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html',
        controller: 'InfoController'
      }
    }
  })
  .state('app.info2', {
    url: '/info2',
    views: {
      'menuContent': {
        templateUrl: 'templates/info2.html',
        controller: 'InfoController2'
        
      }
    }
  }).state('app.checkout', {
    url: '/checkout',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkout.html',
        controller: 'checkoutController'
        
      }
    }
  })
  .state('app.trial', {
    url: '/trial',
    views: {
      'menuContent': {
        templateUrl: 'templates/trial.html',
        controller: 'TrialController'
        
      }
    }
  }).state('app.therapist', {
    url: '/therapist',
    views: {
      'menuContent': {
        templateUrl: 'templates/therapist.html',
        controller:'TherapistController'
      }
    },resolve:{

      List:function($state,$location,$http,$localStorage){

            var times=$localStorage.time;
            var dates=$localStorage.date;

            var config2= {
             params: { time: times,
                  date:dates
                }
          };
        return $http.get('http://localhost:9000/era',config2)
        .then(function(response){
        var data=response.data;
        return data;
          });
      }
    }
  });


 
    

  
 











  $urlRouterProvider.otherwise('/app/splash');
});


var checkRouting= function () {
    
        // var deferred = $q.defer();

             $http({
                        method : "GET",
                        url : "welcome.htm"
                    }).then(function mySucces(response) {
                        return true;
                    }, function myError(response) {
                        return false;
                    });
        

             // if(1==1){
             //  return true;
             // }else{
             //  return false;
             // }
              
              
              
              // $state.go("app.login");
  
            


        // return deferred.promise();
    
};


