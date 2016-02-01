(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LessonDetailController', LessonDetailController);

  function LessonDetailController($scope) {
    var vm = this;

    // funcation assignment
    vm.finishWizard = finishWizard;

    vm.model = {};

    
    vm.exitValidation = function(form) {
      return form && !form.$invalid;
    };

    vm.fields = {
      hello: 'what the heck',
      step1: [
        {
          key: 'email',
          type: 'inline-input',
          templateOptions: {
            label: 'Username',
            type: 'email',
            placeholder: 'Email address',
            required: true
          }
        }
      ],
      step2: [
        {
          key: 'firstName',
          type: 'inline-input',
          templateOptions: {
            type: 'text',
            label: 'First Name',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'inline-input',
          templateOptions: {
            type: 'text',
            label: 'Last Name',
            required: true
          }
        }
      ]
    };
    console.log(JSON.stringify(vm.fields));

    // function definition
    function finishWizard() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  }
})();