'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function(){

  beforeEach(module('phonecatApp'));

  /*
   API Reference / ngMock / function / angular.mock.inject
   inject関数は、（スコープ内部の）関数を（スコープ外部に）投入可能な関数にラップする。
   inject()は、テストごとに$injectorの新しいインスタンスをつくる。
   そしてそれは参照を解決するために使われる。

   ◆参照を解決する（下線ラップ）

   しばしば、beforeEach()ブロックで参照を一度投入し、
   複数のit()節でこれを再利用したくなることがある。
   これを可能にするには、参照を、
   describe()ブロックのスコープの中で宣言された変数に割り当てなければならない。
   たいていの場合、変数は参照と同じ名前である方がわかりやすいため、問題になる。
   なぜなら、inject()関数の引数が外部の変数を隠してしまうからである。

   これを助けるために、投入される引数は、任意に、下線で囲むことができる。
   参照名を解決するとき、これらは投入するものによって無視される。

   例えば、引数 _myService_ はmyServiceへの参照として解決される。
   関数体のなかでmyServiceとして利用可能であるため、
   それを外部スコープにある変数に割り当てることができる。
  */
  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe( 3 );
    expect(scope.name).toBe( 'World' );
  }));

});