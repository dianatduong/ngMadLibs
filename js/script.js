
angular.module('myApp', []) 
  .controller('myCtrl', function($scope) {
    // var maleName = [{
    //   he: 'he',
    //   him: 'him',
    //   his: 'his'
    // }]
    // $scope.maleName = maleName;

    // var femaleName = [{
    //   she: 'she',
    //   her: 'her'
    // }]
    // $scope.femaleName = femaleName;

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



// //   var words = [ 
//     {maleName: '',
//     jobTitle: '',
//     tediousTask: '',
//     dirtyTask: '',
//     celebrity: '',
//     uselessSkill: '',
//     obnoxiousCelebrity: '',
//     hugeNumber: '',
//     adjective: ''
//    }
//    ];
//    $scope.words = words;