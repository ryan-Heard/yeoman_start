'use strict';
(function() {

class ContactCtrl {

  constructor($http) {
    this.$http = $http;
    this.contacts = [
      {
      'name': 'Randey',
      'number': '(817) 565-3203'},
      {
        'name':'Trevor',
        'number':'(507) 226-4477'
      },
      {
        'name': "Email",
        'number': 'OklahomaSafetyInspectors@yahoo.com'
      }
    ];
  }


}

angular.module('myAngularProjectApp')
  .controller('ContactCtrl', ContactCtrl);
})();
