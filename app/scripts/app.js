(function() {
  'use strict';
  angular
      .module('app', [
	      'ngAnimate',
	      'ngResource',
	      'ngSanitize',
	      'ngTouch',
	      'ngStorage',
	      'xeditable',
	      'infinite-scroll',
	      'monospaced.elastic',
	      'ui.router',
	      'ui.utils',
	      'ui.load',
	      'ui.jp',
	      'mgcrea.ngStrap',
	      'oc.lazyLoad',
	      'angular-jwt',
	      'luegg.directives',
	      'ngMap'
      ])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
	]);
})();
