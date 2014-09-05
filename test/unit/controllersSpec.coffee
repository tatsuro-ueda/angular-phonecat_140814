describe 'PhoneCat controllers', ->

  describe 'PhoneListCtrl', ->
    scope = null
    ctrl = null

    beforeEach module 'phonecatApp'

    beforeEach inject ( $controller ) ->
      scope = {}
      ctrl = $controller( 'PhoneListCtrl', { $scope:scope } )

    it 'should create "phones" model with 3 phones', ->
      expect( scope.phones.length ).toBe( 3 )

    it 'should set the default value of orderProp model', ->
      expect( scope.orderProp ).toBe( 'age' )