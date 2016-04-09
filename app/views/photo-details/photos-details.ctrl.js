(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$log', '$window', '$rootScope', 'dictionary', 'apiService', 'CONST'];

    /* @ngInject */
    function HomeCtrl($scope, $log, $window, $rootScope, dictionary, apiService, CONST) {
        var vm = this;
        vm.dict = dictionary();
	    vm.getMostViewedMedia = getMostViewedMedia;

	    activate();

        ////////////////

        function activate() {
            $log.info("HomeCtrl is mounted");

	        initMap();
        }

	    function initMap() {
		    // Create a map object and specify the DOM element for display.
		    var map = new google.maps.Map(document.getElementById('map'), {
			    center: {lat: -34.397, lng: 150.644},
			    scrollwheel: false,
			    zoom: 8
		    });
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

