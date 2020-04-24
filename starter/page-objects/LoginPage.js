
// Page objects for the login/settings page

var LoginPage = function () {

  var loginid = element(by.id('username'));
  var loginpassword = element(by.id('password'));
  var providerselector = element(by.id('adf-provider-selector'));
  var matoption = element(by.id('mat-option-1'));
  var submitbutton = element(by.id('host-button'));

  // using async, available with ES6
  this.getSettingsPage = function () {
    browser.get('http://qaexercise.envalfresco.com/settings');
  };

  this.selectProviderEMC = function () {
    providerselector.click();
    matoption.click();
  };

  this.setLoginId = function (login) {
    loginid.sendKeys(login);
  };

  this.setPassword = function (password) {
    loginpassword.sendKeys(password);
  };

  this.clickSettingsSubmit = function () {
    submitbutton.click();
  };
};
module.exports = new LoginPage();
