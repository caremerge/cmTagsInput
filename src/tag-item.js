'use strict';

/**
 * @ngdoc directive
 * @name cmTiTagItem
 * @module cmTagsInput
 *
 * @description
 * Represents a tag item. Used internally by the cmTagsInput directive.
 */
tagsInput.directive('cmTiTagItem', function(cmTiUtil) {
    return {
        restrict: 'E',
        require: '^cmTagsInput',
        template: '<ng-include src="$$template"></ng-include>',
        scope: {
            $scope: '=scope',
            data: '='
        },
        link: function(scope, element, attrs, tagsInputCtrl) {
            var tagsInput = tagsInputCtrl.registerTagItem(),
                options = tagsInput.getOptions();

            scope.$$template = options.template;
            scope.$$removeTagSymbol = options.removeTagSymbol;

            scope.$getDisplayText = function() {
                return cmTiUtil.safeToString(scope.data[options.displayProperty]);
            };
            scope.$removeTag = function() {
                tagsInput.removeTag(scope.$index);
            };

            scope.$watch('$parent.$index', function(value) {
                scope.$index = value;
            });
        }
    };
});
