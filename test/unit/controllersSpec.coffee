describe 'PhoneCat controllers', ->

  describe 'PhoneListCtrl', ->
    scope = null
    ctrl = null
    $httpBackend = null

    beforeEach module 'phonecatApp'

    beforeEach inject ( _$httpBackend_, $rootScope, $controller ) ->
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET( 'phones/phones.json' ).
        respond( [ {name: 'Nexus S'}, {name: 'Motorola DROID'} ] );

      scope = $rootScope.$new();
      ctrl = $controller( 'PhoneListCtrl', { $scope:scope } )

    it 'should create "phones" model with 2 phones fetched from xhr', ->
      expect( scope.phones ).toBeUndefined();
      $httpBackend.flush;

      expect( scope.phones ).toEqual( [ { name: 'Nexus S' }, { name: 'Motorola DROID' } ] )