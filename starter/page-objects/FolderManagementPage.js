
// Page objects for the folder management page

var FolderManagementPage = function () {

  var newfolder = element(by.css('button[data-automation-id="create-new-folder"]'));
  var foldercreatebutton = element(by.id('adf-folder-create-button'));
  var foldercancelbutton = element(by.id('adf-folder-cancel-button'));
  var folderdeletebutton = element(by.css('button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'));
  var folderfield = element(by.id('adf-folder-name-input'));
  var folderlist = element.all(by.css('.adf-datatable-body')).get(1);
  var infotextarea = element(by.css('body'));
  var errortext = 'There\'s already a folder with this name. Try a different name';
  var deletionconfirmtext = 'jaffamonkey deleted';

  this.getFolderManagementPage = function () {
    browser.get('http://qaexercise.envalfresco.com/files');
  };

  this.createNewFolder = function (foldername) {
    newfolder.click();
    folderfield.sendKeys(foldername);
    foldercreatebutton.click();
  };

  this.checkNewFolderCreated = function (foldername) {
    expect(folderlist.getText()).toContain(foldername);
  };

  this.checkDuplicateFolderMessage = function () {
    expect(infotextarea.getText()).toContain(errortext);
  };

  this.clickCancelButton = function () {
    foldercancelbutton.click();
  };

  this.deleteAFolderWithCheck = function (foldername) {
    element(by.css('div[data-automation-id="auto_id_createdAt"')).click();
    element(by.css('div[data-automation-id="auto_id_createdAt"')).click();
    element(by.id('action_menu_right_0')).click();
    folderdeletebutton.click();
    expect(infotextarea.getText()).toContain(deletionconfirmtext);
  };
};

module.exports = new FolderManagementPage();
