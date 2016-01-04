'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'About Us',
    'state': 'about'
  },
  {
    'title': 'Contact Us',
    'state': 'contact'
  },
  {
    'title': 'Pricing',
    'state': 'pricing'
  },
  {
    'title': 'Specials',
    'state': 'specials'
  }

];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('myAngularProjectApp')
  .controller('NavbarController', NavbarController);
