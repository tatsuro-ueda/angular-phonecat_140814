'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

/* 
phonecatAppモジュールに、PhoneListCtrlというcontrollerを生やす
$scopeは、PhoneListCtrlという名のcontrollerのスコープ
*/
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller( 'PhoneListCtrl', [ '$scope', '$http',
  function( $scope, $http ) {
    $http.get('phones/phones.json').success(function (data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }
]);

  /*
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
      'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
      'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
      'age': 3}
  ];
   */

  /*
   実験
  $scope.name = "World";
  $scope.isLong = function(phone) {
  	var n = phone.name.length;
  	return ( n > 7);
  };
   */

