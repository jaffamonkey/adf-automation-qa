
// Page objects for the login/settings page

var LoginPage = function () {

  var loginid = element(by.id('username'));
  var loginpassword = element(by.id('password'));

  // using async, available with ES6
  this.getSettingsPage = function () {
    browser.get('http://qaexercise.envalfresco.com/settings');
  };

  this.selectProviderEMC = function () {
    element(by.id('adf-provider-selector')).click();
    element(by.id('mat-option-1')).click();
  };

  this.setLoginId = function (login) {
    loginid.sendKeys(login);
  };

  this.setPassword = function (password) {
    loginpassword.sendKeys(password);
  };

  this.clickSettingsSubmit = function () {
    element(by.id('host-button')).click();
  };
};
module.exports = new LoginPage();
