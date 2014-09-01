'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

/* 
phonecatAppモジュールに、PhoneListCtrlというcontrollerを生やす
$scopeは、PhoneListCtrlという名のcontrollerのスコープ
*/
phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.name = "World";
  $scope.isLong = function(phone) {
  	var n = phone.name.length;
  	return ( n > 7);
  };
});