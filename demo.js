// import { assert } from 'chai'

Feature('');


Scenario('Sign Up for the github account', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.click("//BUTTON[@class='btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3'][text()='Sign up for GitHub']");
    I.appendField("//INPUT[@id='user_login']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='user_email']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='user_password']", "Ganesh Tatipamul")
    // I.click("//INPUT[@type='submit']");

});

Scenario('Sign In for the github account', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    // I.click("//BUTTON[@class='btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3'][text()='Sign up for GitHub']");
    I.click("//button[@class=\"btn-link d-lg-none mt-1 js-details-target\"]")
    I.click("//a[@class=\"HeaderMenu-link no-underline mr-3\"]");
    I.appendField("//INPUT[@id='login_field']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='password']", "Ganesh Tatipamul");

    I.click("//INPUT[@type='submit']");
    I.seeElement("//DIV[@class='container']", "Incorrect username or password.")

});

Scenario('Testing my Own app', (I) => {
    I.amOnPage('http://localhost:4000');
    I.see('Login');
    // I.click("//BUTTON[@class='btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3'][text()='Sign up for GitHub']");
    // I.click("//button[@class=\"btn-link d-lg-none mt-1 js-details-target\"]")
    // I.click("//a[@class=\"HeaderMenu-link no-underline mr-3\"]");
    I.appendField("//INPUT[@id='email']", "ganesh.tatipamul@successive.tech");
    I.appendField("//INPUT[@id='password']", "Ganesh Tatipamul");

    I.click("//BUTTON[@class='MuiButtonBase-root MuiButton-root Login-submit-19 MuiButton-containedPrimary MuiButton-contained MuiButton-fullWidth']");
});

Scenario('Testing my Own app wi', (I) => {

    I.click("//BUTTON[@class='MuiButtonBase-root MuiButton-root Login-submit-19 MuiButton-containedPrimary MuiButton-contained MuiButton-fullWidth']");
    I.wait(10);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[2]");
    I.wait(10);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[3]");
    I.appendField("//INPUT[@type='text']", "Ganesh");
    // I.wait(5);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[4]");
    I.wait(5);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[5]");
    I.wait(5);
});



Scenario('Testing my Own app wi', (I) => {
    // I.amOnPage('http://localhost:5000');
    I.sendQuery()

});