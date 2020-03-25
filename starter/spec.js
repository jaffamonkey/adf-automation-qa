// spec.js
var login = require('./page-objects/LoginPage');
var files = require('./page-objects/FolderManagementPage');
var utility = require('./page-objects/Utility');

describe('ADF Demo App', function () {

  // Protractor uses Jasmine framework by default
  it('sign in to folder management', function () {
    login.getSettingsPage();
    login.selectProviderEMC();
    login.clickSettingsSubmit();
    login.setLoginId('guest@example.com');
    login.setPassword('Password');
    utility.clickButton('.adf-login-button-label');
    utility.areaContains('h2', 'Angular components for Alfresco');
  });

  it('create and delete new folder', function () {
    files.getFolderManagementPage();
    files.createNewFolder('jaffamonkey');
    files.checkNewFolderCreated('jaffamonkey');
    files.createNewFolder('jaffamonkey');
    files.checkDuplicateFolderMessage();
    files.clickCancelButton();
    files.deleteAFolderWithCheck('jaffamonkey');
  });
});
