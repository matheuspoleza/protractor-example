// spec.js
describe('ContaAzul Login Test', function() {
  it('should login endTrial account', function() {
    browser.driver.get('https://app.contaazul.com/');

    browser.driver.findElement(by.id('username_login')).sendKeys('dasdas@contaazul.com');
    browser.driver.findElement(by.id('password_login')).sendKeys('9506ki84');
    browser.driver.findElement(by.id('loginSubmit')).click();
    
    browser.ignoreSynchronization = true; 
    expect(browser.getCurrentUrl()).toEqual('https://app.contaazul.com/#/endTrial');
  });
});