import * from "..//node_modules";

export const SignIn =  '//a[@id="nav-link-accountList"]';

export function getSignInButton() {
    browser.findElement(SignIn);
}

export function clickOnSignInButton(){
  //  browser.click(getSignInButton());

  getSignInButton().click();
}

