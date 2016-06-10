var app = angular.module('myApp', ['ngMessages']) 
  app.controller('myCtrl', function() {

    var vm = this;
    //change gender
    // sets the radio button input to female on default
    vm.gender = "female"
    vm.firstPersonSubjective = { 
      female: 'she',
      male: 'he'
    }
    vm.firstPersonObjective = {
      female: 'her',
      male: 'his'
    }



    //hides results section
    vm.results = false;
    vm.vm= {}
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


  