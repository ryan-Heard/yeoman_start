'use strict';

angular.module('myAngularProjectApp.auth', [
  'myAngularProjectApp.constants',
  'myAngularProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
