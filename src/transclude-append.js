'use strict';

/**
 * @ngdoc directive
 * @name cmTiTranscludeAppend
 * @module cmTagsInput
 *
 * @description
 * Re-creates the old behavior of ng-transclude. Used internally by cmTagsInput directive.
 */
tagsInput.directive('cmTiTranscludeAppend', function() {
    return function(scope, element, attrs, ctrl, transcludeFn) {
        transcludeFn(function(clone) {
            element.append(clone);
        });
    };
});