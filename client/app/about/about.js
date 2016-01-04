'use strict';

angular.module('myAngularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
