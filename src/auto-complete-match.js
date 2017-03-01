'use strict';

/**
 * @ngdoc directive
 * @name cmTiAutocompleteMatch
 * @module cmTagsInput
 *
 * @description
 * Represents an autocomplete match. Used internally by the autoComplete directive.
 */
tagsInput.directive('cmTiAutocompleteMatch', function($sce, cmTiUtil) {
    return {
        restrict: 'E',
        require: '^cmAutoComplete',
        template: '<ng-include src="$$template"></ng-include>',
        scope: {
            $scope: '=scope',
            data: '='
        },
        link: function(scope, element, attrs, autoCompleteCtrl) {
            var autoComplete = autoCompleteCtrl.registerAutocompleteMatch(),
                options = autoComplete.getOptions();

            scope.$$template = options.template;
            scope.$index = scope.$parent.$index;

            scope.$highlight = function(text) {
                if (options.highlightMatchedText) {
                    text = cmTiUtil.safeHighlight(text, autoComplete.getQuery());
                }
                return $sce.trustAsHtml(text);
            };
            scope.$getDisplayText =  function() {
                return cmTiUtil.safeToString(scope.data[options.displayProperty || options.tagsInput.displayProperty]);
            };
        }
    };
});
