var app = angular.module('madLib', ['ngMessages'])
  app.controller('InputController', function() {

    var input = this;
  //hides results section
    input.results = false;
    //empty input object
    input.input = {};
    //submitted forms empty array
    input.submittedData = [];

    // function to submit the form after all validation has occurred
    input.submitForm = function(isValid){
      //if form is valid
      if (isValid) {
        //push users input into the array
         input.submittedData.push(input.input)
         // clear form
         input.input = {}
         //displays results section
         input.results = true;
      }
      else {
        // show error messages
        input.submitted = true;
       }
    }

    //change gender
    // sets the default on the radio button to female 
    input.gender = "female";

    input.thirdPersonSubjective = { 
      female: 'she',
      male: 'he'
    }

    input.thirdPersonObjective = {
      female: 'her',
      male: 'him'
    }

    input.thirdPersonPossessive = {
      female: 'her',
      male: 'his'
    }

    input.startover = function(){
      input.name = "";
      input.jobTitle = "";
      input.tediousTask = "";
      input.dirtyTask = "";
      input.celebrity = "";
      input.uselessSkill = "";
      input.obnoxiousCelebrity = "";
      input.hugeNumber = "";
      input.adjective = "";
      //hides results section
      input.results = false;
      //resets error messages
      input.myForm.$submitted = false;
      //resets form 
      input.myForm.$setPristine();
      
    }
})

  