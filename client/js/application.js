var myapp=angular.module('myApp', ['ngRoute','ngStorage','pickadate','ngMaterial','angularCSS']);


myapp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/date-select', {
    templateUrl: '../views/date-select.html',
    controller: 'contrl1',
     css: {
        href: './stylesheets/date_select.css'
      },
  })
  
  .when('/service-type', {
    templateUrl: '../views/service_type.html',
    controller: 'contrl3',
    css: {
        href: './stylesheets/service.css'
      },
    
  })
  .when('/user-info', {
    templateUrl: '../views/user-info.html',
    controller: 'contrl4',
    css: {
        href: './stylesheets/user-info.css'
      },
    
  }).when('/summary', {
    templateUrl: '../views/summary.html',
    controller: 'contrl5',
    css: {
        href: './stylesheets/summary.css'
      },
    
  }).when('/session-select', {
    templateUrl: '../views/session-select.html',
    controller: 'session_select_controller',
    
  })
  .when('/booking-success', {
    templateUrl: '../views/booking-success.html'
    
  })
  .when('/booking-failure', {
    templateUrl: '../views/booking-failure.html'
    
  }).when('/checkout', {
    templateUrl: '../views/checkout.html',
    controller:'checkoutController',
    css: {
        href: './stylesheets/checkout.css'
      },

    
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});