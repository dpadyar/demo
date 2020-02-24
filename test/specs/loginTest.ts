//const login = require('../../Pages/loginPage');
//import * as login from "../../Pages/loginPageNew"

import * as login from "../../Pages/loginPageNew"

describe('Twitch Homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('https://www.amazon.com/');
        const title = browser.getTitle();
        console.log(title);
        
       // assert.equal(title, 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
    });

    it('should navigate to Sign In page', ()=>{
        login.clickOnSignInButton();
    });


});