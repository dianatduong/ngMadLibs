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
    //vm object
    vm.vm = {}
    //submitted forms array
    vm.submittedData = []

    // function to submit the form after all validation has occurred
    vm.submitForm = function(isValid){
      //if form is valid
      if (isValid) {
        //push users input into the array
         vm.submittedData.push(vm.vm)
         // clear form
         vm.vm = {}
         //displays results section
         vm.results = true;
      } 
      else {
        // show error messages
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
      // remove error messages
      vm.myForm.$submitted = false;
    }



  })


  