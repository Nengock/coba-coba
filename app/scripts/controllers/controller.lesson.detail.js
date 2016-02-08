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
      step1: [
        {
          key: 'item1',
          type: 'toggle',
          templateOptions: {
            label: 'Identifies a helper and makes an emergency plan ',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item2',
          type: 'toggle',
          templateOptions: {
            label: 'Prepares the area for delivery',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item3',
          type: 'toggle',
          templateOptions: {
            label: 'Cleans hands and maintains clean technique throughout',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item4',
          type: 'toggle',
          templateOptions: {
            label: 'Prepares an area for ventilation and checks equipment',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        }

      ],
      step2: [
        {
          key: 'item5',
          type: 'toggle',
          templateOptions: {
            label: 'Dries thoroughly*',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item6',
          type: 'toggle',
          templateOptions: {
            label: 'Removes wet cloth',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
      ],
      step3: [
        {
          key: 'item7',
          type: 'toggle',
          templateOptions: {
            label: 'Recognizes baby is not crying*',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        }
      ],
      step4: [
        {
          key: 'item8',
          type: 'toggle',
          templateOptions: {
            label: 'Keeps warm',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item9',
          type: 'toggle',
          templateOptions: {
            label: 'Positions head and clears airway*',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item10',
          type: 'toggle',
          templateOptions: {
            label: 'Stimulates breathing by rubbing the baby',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        }
      ],
      step5: [
        {
          key: 'item11',
          type: 'toggle',
          templateOptions: {
            label: 'Recognizes baby is breathing well',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item12',
          type: 'toggle',
          templateOptions: {
            label: 'Clamps or ties and cuts the cord',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
          }
        },
        {
          key: 'item13',
          type: 'toggle',
          templateOptions: {
            label: 'Positions skin-to-skin on mother’s chest and communicates with mother',
            toggleClass:"positive",
            toggleText:"Done;Not Done"
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