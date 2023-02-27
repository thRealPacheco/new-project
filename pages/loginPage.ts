import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) { }

    //Locators
    readonly emailTextField = this.page.locator("#email");
    readonly passwordTextField = this.page.locator("#password");
    readonly loginAccessButton = this.page.locator("#loginButton");

}