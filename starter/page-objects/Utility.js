// Page objects for more generic functions

var Utility = function () {

  this.areaContains = function (selector, text) {
    expect(element(by.css(selector)).getText()).toContain(text);
  };

  this.clickButton = function (selector) {
    element(by.css(selector)).click();
  };
};

module.exports = new Utility();
