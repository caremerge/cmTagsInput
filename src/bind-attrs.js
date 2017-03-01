'use strict';

/**
 * @ngdoc directive
 * @name cmTiBindAttrs
 * @module cmTagsInput
 *
 * @description
 * Binds attributes to expressions. Used internally by cmTagsInput directive.
 */
tagsInput.directive('cmTiBindAttrs', function() {
    return function(scope, element, attrs) {
        scope.$watch(attrs.cmTiBindAttrs, function(value) {
            angular.forEach(value, function(value, key) {
                attrs.$set(key, value);
            });
        }, true);
    };
});