(function () {
    'use strict';

    angular
        .module('app')
        .controller('PhotoDetailsCtrl', PhotoDetailsCtrl);

	PhotoDetailsCtrl.$inject = ['$scope', '$log', '$window', '$rootScope', 'dictionary', 'apiService', 'CONST'];

    /* @ngInject */
    function PhotoDetailsCtrl($scope, $log, $window, $rootScope, dictionary, apiService, CONST) {
        var vm = this;
        vm.dict = dictionary();
	    vm.getMostViewedMedia = getMostViewedMedia;

	    activate();

        ////////////////

        function activate() {
            $log.info("HomeCtrl is mounted");

	        // getMostViewedMedia();
        }
        function getMostViewedMedia(categoryKey) {
	        apiService.getMostViewedMedia(categoryKey, 24 * 7, 0, 16).success(function(res){
	            vm.mostViewedMedia = shuffle(res.data.slice(0, 7));
            });
        }
	    function shuffle(array) {
		    var currentIndex = array.length, temporaryValue, randomIndex;
		    while (0 !== currentIndex) {
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
		    }
		    return array;
	    }
    }

})();

