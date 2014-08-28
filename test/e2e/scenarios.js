'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

/*
 protractorのチュートリアル
 https://github.com/angular/protractor/blob/master/docs/tutorial.md
 */
 
describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {

      /*
       protractor
       ElementArrayFinder
       Use as: element.all(locator)
       「ElementArrayFinderは、HTML要素の配列の操作のために使われる
       　（HTML要素が一つだけの場合と区別される）」
       https://github.com/angular/protractor/blob/master/lib/protractor.js#L69
       */

      /*
       Locator
       ProtractorBy.prototype.repeater
       「ng-repeat内部のHTML要素を見つける」
       https://github.com/angular/protractor/blob/master/lib/locators.js#L217
       */

      var phoneList = element.all(by.repeater('phone in phones'));

      /*
       locator
       ProtractorBy.prototype.model
       Use as: by.model(modelName)
       「ng-model表現を持つHTML要素を見つける」
       https://github.com/angular/protractor/blob/master/lib/locators.js#L140
       */

      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      /*
       webdriver
       webdriver.WebElement.prototype.sendKeys
       「このインスタンスによって表されるDOM要素に対して、いくつかのキーを打ち込む命令を予定する」
       https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js#1757
       */

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      /*
       webdriver
       webdriver.WebElement.prototype.clear
       「この要素の{@code value}を消去する命令を予定する。
       　背後ののDOM要素がテキストINPUT要素でもTEXTAREA要素でもない場合、この命令は効果がない。」
       https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js#1966
       */
      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });
});