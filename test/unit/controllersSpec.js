'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function(){

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach( module( 'phonecatApp' ) );

    /*
     API Reference / ngMock / function / angular.mock.inject
     inject関数は、（スコープ内部の）関数を（スコープ外部に）投入可能な関数にラップする。
     inject()は、テストごとに$injectorの新しいインスタンスをつくる。
     そしてそれは参照を解決するために使われる。
     */

    beforeEach( inject( function( $controller ){
      scope = {},
      ctrl = $controller( 'PhoneListCtrl', { $scope:scope } );
    }));

    it('should create "phones" model with 3 phones', function(){
      expect(scope.phones.length).toBe( 3 );
    });

    it('should set the default value of orderProp model', function(){
      expect(scope.orderProp).toBe('age');
    });
  });
});