(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function($scope) {
    $scope.menu = "";
    $scope.message = "";

    $scope.populateMessage = function () {
      var words = $scope.menu.split(',');

      var len = 0;
      for (var i = 0; i < words.length; i++) {
        if (words[i] !== undefined) {
          len++;
        }
      }

      if (len == 0 || $scope.menu === "") {
        $scope.message = "Please enter data first";
      }
      else if (len > 0 && len <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };
  })
})();
