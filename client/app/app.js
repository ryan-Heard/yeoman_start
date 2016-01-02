'use strict';

angular.module('myAngularProjectApp', [
  'myAngularProjectApp.auth',
  'myAngularProjectApp.admin',
  'myAngularProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
