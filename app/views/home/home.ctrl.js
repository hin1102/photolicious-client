(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$log', '$window', '$rootScope', 'dictionary', 'apiService', 'forecastApiService', 'CONST'];

    /* @ngInject */
    function HomeCtrl($scope, $log, $window, $rootScope, dictionary, apiService, forecastApiService, CONST) {
        var vm = this;
        vm.dict = dictionary();

	    activate();

        ////////////////

        function activate() {
            $log.info("HomeCtrl is mounted");

	        initMap();

	        getForecast();
        }

	    //map

	    function initMap() {
		    var map = new google.maps.Map(document.getElementById('map'), {
			    zoom: 11,
			    center: {lat: 41.876, lng: -87.624}
		    });
	    }

	    function getForecast() {
		    forecastApiService.getForecast(41.876, -87.624).success(function(res) {
			    console.log(res);
		    });
	    }

        function getNearbyMedias(categoryKey) {
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

