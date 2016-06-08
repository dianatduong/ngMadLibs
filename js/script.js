
angular.module('myApp', []) 
  .controller('myCtrl', function($scope) {

    $scope.gender = "female";

    $scope.firstPersonSubjective = { 
      female: 'she',
      male: 'he'
    }

    $scope.firstPersonObjective = {
      female: 'her',
      male: 'him'
    }

  });

