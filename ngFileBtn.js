/**
 * Created by darkspring on 24.07.2016.
 */
angular.module('ngFileBtn', [])
    .directive('ngFileBtn', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var fileDialogId = attrs.ngFileBtn;
                function handler(e) { $("#" + fileDialogId).trigger("click"); }
                element.on("click", handler);
                scope.$destroy(function(){ element.off("click", handler); });
            }
        }
    });