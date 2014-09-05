'use strict';

# http://docs.angularjs.org/guide/dev_guide.e2e-testing */

###
  protractorのチュートリアル
https://github.com/angular/protractor/blob/master/docs/tutorial.md
###

describe 'PhoneCat App', ->

  describe 'Phone list view', ->

    beforeEach ->
      browser.get( 'app/index.html' )

    it '検索ボックスの中への入力にしたがって電話リストの中から抽出する', ->

      ###
      protractor
      ElementArrayFinder
      Use as: element.all(locator)
      「ElementArrayFinderは、要素の配列の操作のために使われる
      　（要素が一つだけの場合と区別される）」
      https://github.com/angular/protractor/blob/master/lib/protractor.js#L69
      ###

      ###
      Locator
      ProtractorBy.prototype.repeater
      「ng-repeat内部の要素を見つける」
      https://github.com/angular/protractor/blob/master/lib/locators.js#L217
      ###

      phoneList = element.all By.repeater( 'phone in phones' )

      ###
      protractor
      ElementFinder
      Use as: element(locator)
      「ElementFinderは、たいていの場合、Webエレメントとして扱うことができる。
      　特に、Webエレメントと同じように、ElementFinderに対して
      　アクション（click、getTextなど）を行うことができる。
      　ElementFinderはPromiseを継承している。
      　そのため、複数のElementFinder上でひとたびアクションが行われると、
      　thenを使うことで、そのチェーンの最後の結果にアクセスすることができる。
      　Webエレメントとは違い、ElementFinderは
      　探索やアクションを行う前にangularが完了するのを待つ。

      　ElementFinderは、要素を見つけるためのlocatorのチェーンを作るのに使うことができる。
      　実際にはElementFinderは、アクションが呼ばれるまで要素を探そうとしない。
      　つまりそれらは、ページが利用可能になる前に
      　ヘルパーファイルの中でセットアップすることができる。（？）」
      ###

      ###
      locator
      ProtractorBy.prototype.model
      Use as: by.model(modelName)
      「ng-model表現を持つ要素を見つける」
      https://github.com/angular/protractor/blob/master/lib/locators.js#L140
      ###

      query = element `by`.model( 'query' )

      expect( phoneList.count() ).toBe( 3 );

      ###
      webdriver
      webdriver.WebElement.prototype.sendKeys
      「このインスタンスによって表されるDOM要素に対して、いくつかのキーを打ち込む命令を予定する」
      https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js#1757
      ###

      query.sendKeys( 'nexus' );
      expect( phoneList.count() ).toBe( 1 );

      ###
      webdriver
      webdriver.WebElement.prototype.clear
      「この要素の{@code value}を消去する命令を予定する。
      　背後ののDOM要素がテキストINPUT要素でもTEXTAREA要素でもない場合、この命令は効果がない。」
      https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js#1966
      ###
      query.clear();
      query.sendKeys( 'motorola' )
      expect( phoneList.count() ).toBe( 2 )

    it 'should display the current filter value in the title bar', ->
      query = element `by`.model( 'query' )

      query.clear()
      expect( browser.getTitle() ).toMatch( /Google Phone Gallery:\s*$/ )

      query.sendKeys( 'nexus' )
      expect( browser.getTitle() ).toMatch( /Google Phone Gallery: nexus$/ )

    it 'should be possible to control phone order via the drop down select box', ->

      ###
      Returns a promise that resolves to an array of WebElements from a column
        var ages = element.all(by.repeater('cat in pets').column('{{cat.age}}'));
        catのage属性を並べた配列を返す
      ###
      phoneNameColumn = element.all By.repeater( 'phone in phones' ).column( '{{phone.name}}' )
      query = element By.model( 'query' )

      getNames = ->
        phoneNameColumn.map( ( elm )-> elm.getText() )

      query.sendKeys( 'tablet' ) #let's narrow the dataset to make the test assertions shorter

      # 'tablet'でフィルタすると以下の二つが残る
      expect( getNames() ).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"
      ])

      element(By.model( 'orderProp' )).element(By.css( 'option[value="name"]' )).click();

      # さらにnameでソートすると以下の順番になる
      expect( getNames() ).toEqual([
        "MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"
      ])