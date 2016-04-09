(function () {
    'use strict';

    angular
        .module('app')
        .factory('apiService', apiService);

	apiService.$inject = ['$http', '$rootScope'];

    /* @ngInject */
    function apiService($http,$rootScope) {
        var apiUrl = "http://45.115.39.208/api/";
        var apiUploadUrl = apiUrl + 'upload';
        var authAppUrl = "http://45.115.39.208/client_v2/app/index.html";

        var clientId = $rootScope.clientId;
        var clientType = $rootScope.clientType;

        var api = {apiUrl : apiUrl, apiUploadUrl:apiUploadUrl};

        //-----------------------------------------------------------------------------
        //
        api.getChats = function(skip, limit) {
            return $http.get(apiUrl + 'chats?skip=' + skip + '&limit=' + limit);
        };
        api.getChat = function(buddyUsername) {
            return $http.get(apiUrl + 'chats/' + buddyUsername);
        };
        api.getMessages = function(buddyId, skip, limit) {
            return $http.get(apiUrl + 'chats/' + buddyId + '/messages?skip=' + skip + '&limit=' + limit);
        };
        api.sendMessage = function(content, buddyId, fileName) {
            var data = {
                buddy_id: buddyId,
                content: content,
                image_name: fileName};
            return $http.post(apiUrl + 'chats', data);
        };
        api.getMostViewedMedia = function() {
            return {};
        };

		//-----------------------------------------------------------------------------
	    // Most Viewed and Views


        return api;
    }

})();