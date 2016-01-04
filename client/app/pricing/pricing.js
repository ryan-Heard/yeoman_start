'use strict';

angular.module('myAngularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingCtrl'
      });
  });
