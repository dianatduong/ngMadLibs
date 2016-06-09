
angular.module('myApp', []) 
  .controller('myCtrl', function($scope) {
    var vm = this;
    // sets the radio button input to female on default
    vm.gender = "female"
    vm.firstPersonSubjective = { 
      female: 'she',
      male: 'he'
    }
    vm.firstPersonObjective = {
      female: 'her',
      male: 'him'
    }
  })

