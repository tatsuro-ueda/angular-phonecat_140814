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
       ElementArrayFinder
       Use as: element.all(locator)
       「ElementArrayFinderは、エレメントの配列の操作のために使われる
       　（エレメントが一つだけの場合と区別される）」
       https://github.com/angular/protractor/blob/master/lib/protractor.js#L69
       */

      /*
       ProtractorBy.prototype.repeater
       「ng-repeat内部のエレメントを見つける」
       https://github.com/angular/protractor/blob/master/lib/locators.js#L217
       */

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });
});