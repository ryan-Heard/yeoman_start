'use strict';

angular.module('myAngularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('specials', {
        url: '/specials',
        templateUrl: 'app/specials/specials.html',
        controller: 'SpecialsCtrl'
      });
  });
