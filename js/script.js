
angular.module('myApp', []) 
  .controller('myCtrl', function($scope) {
    var vm = this;
    // sets the radio button input to female on default
    this.gender = "female"
    this.firstPersonSubjective = { 
      female: 'she',
      male: 'he'
    }
    this.firstPersonObjective = {
      female: 'her',
      male: 'him'
    }
  })

