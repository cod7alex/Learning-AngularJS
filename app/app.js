(function() {
	"use strict";

	//app
    	angular
        .module("app", ["ngSanitize", "feature", "common"]);

	//bootstrap
	angular.element(document).ready(function() {
		angular.bootstrap(document, ["app"]);
	})

})();