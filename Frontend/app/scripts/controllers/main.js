'use strict';

/**
 * @ngdoc function
 * @name lawApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lawApp
 */
angular.module('lawApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.q = null;
    $scope.jsonator = [];
  	$scope.jsonator = [{name: 'AAR-SP', value: 26}, {name:'Duminica', value: 26}, {name:'Euripide', value: 90}];


  	$scope.qRequest = function(){
  		$http({
  			method: 'GET',
  			url: '/search?q=' + $scope.q
		  }).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available
    		$scope.jsonator = response;



    		console.log(response);

  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
    		console.log(response);
  		});

  		console.log($scope.q);
  	}
  });
