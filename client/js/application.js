var myapp=angular.module('myApp', ['ngRoute','ngStorage','pickadate']);


myapp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/date-select', {
    templateUrl: '../views/date-select.html',
    controller: 'contrl1',
  })
  .when('/therapist-select', {
    templateUrl: '../views/therapist-select.html',
    controller: 'contrl2',
    
  })
  .when('/service_type', {
    templateUrl: '../views/service_type.html',
    controller: 'contrl3',
    
  })
  .when('/user_info', {
    templateUrl: '../views/user-info.html',
    controller: 'contrl4',
    
  }).when('/checkout', {
    templateUrl: '../views/checkout.html',
    controller: 'contrl5',
    
  }).when('/test_login', {
    template: 'Hello',
    controller: 'contrl6',
    
  })
  .when('/therapist-register', {
    templateUrl: '../views/therapist_register.html',
    controller: 'therapist_register_controller',
    
  }).when('/therapist-login', {
    templateUrl: '../views/therapist_login.html',
    controller: 'therapist_login_controller',
    
  }).when('/therapist-home', {
    templateUrl: '../views/therapist_home.html',
    controller: 'therapist_home_controller',
    
  }).when('/session-select', {
    templateUrl: '../views/session-select.html',
    controller: 'session_select_controller',
    
  })
  .when('/booking-success', {
    templateUrl: '../views/booking-success.html'
    
  })
  .when('/booking-failure', {
    templateUrl: '../views/booking-failure.html'
    
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});