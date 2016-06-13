var app = angular.module('myApp', ['ngMessages']) 
  app.controller('myCtrl', function() {

    var vm = this;
    //change gender
    // sets the radio button input to female on default
    vm.gender = "female"
    vm.thirdPersonSubjective = { 
      female: 'she',
      male: 'he'
    }
    vm.thirdPersonObjective = {
      female: 'her',
      male: 'him'
    }
    vm.thirdPersonPossessive = {
      female: 'hers',
      male: 'his'
    }


    //hides results section
    vm.results = false;
    vm.vm = {}
    vm.submittedData = []

    vm.submitForm = function(isValid){
   
      if (isValid) {
         vm.submittedData.push(vm.vm)
         vm.vm = {}
         //displays results section
         vm.results = true;
      } 
      else {
        vm.submitted = true;
       }
     }



    vm.startover = function(){
      vm.name = "";
      vm.jobTitle = "";
      vm.tediousTask = "";
      vm.dirtyTask = "";
      vm.celebrity = "";
      vm.uselessSkill = "";
      vm.obnoxiousCelebrity = "";
      vm.hugeNumber = "";
      vm.adjective = "";
      //hides results section
      vm.results = false;
    }



  })


  