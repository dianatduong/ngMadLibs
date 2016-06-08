
angular.module('myApp', []).
controller('myCtrl', function($scope) {
   var words = [ 
    {maleName: '',
    jobTitle: '',
    tediousTask: '',
    dirtyTask: '',
    celebrity: '',
    uselessSkill: '',
    obnoxiousCelebrity: '',
    hugeNumber: '',
    adjective: ''
   }
   ];
   $scope.words = words;
});