angular
  .module('example')
  .directive('voteStar', [function () {
    return {
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      template: '<i ng-click="clickStar($index)" class="fa" ng-repeat="star in starList() track by $index" ng-class="{\'fa-star\': ngModel >= $index + 1, \'fa-star-o\': ngModel < $index + 1}"></i>',
      link: function (scope, iElement, iAttrs) {
        scope.starList = function(){
          return new Array(5);
        };
        scope.clickStar = function(num) {
          scope.ngModel = num + 1;
        }
      }
    };
  }])