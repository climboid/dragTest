'use strict';

dragTestApp.directive('draggable', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      element.draggable({})
    }
  };
});
