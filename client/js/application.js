var myapp=angular.module('myApp', ['ngRoute','ngStorage']);


myapp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/try', {
    templateUrl: '../views/view1.html',
    controller: 'contrl1',
  })
  .when('/hello', {
    templateUrl: '../views/view2.html',
    controller: 'contrl2',
    
  })
  .when('/service_type', {
    templateUrl: '../views/view3.html',
    controller: 'contrl3',
    
  })
  .when('/user_info', {
    templateUrl: '../views/view4.html',
    controller: 'contrl4',
    
  }).when('/checkout', {
    templateUrl: '../views/view5.html',
    controller: 'contrl5',
    
  }).when('/test_login', {
    template: 'Hello',
    controller: 'contrl6',
    
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});