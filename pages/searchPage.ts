import { Page } from "@playwright/test";

export default class SearchPage {

    constructor(public page: Page) { }

    //Locators
    readonly closeBannerButton = this.page.locator('[aria-label="Close Welcome Banner"]');
    readonly cookiesButton = this.page.locator("//html/body/div[1]/div/a");
    readonly searchButton = this.page.locator("mat-search-bar");
    readonly searchTextField = this.page.locator('#mat-input-0');
    readonly accountButton = this.page.locator('#navbarAccount');
    readonly loginButton = this.page.locator("#navbarLoginButton");
    readonly languageButton = this.page.locator('[aria-label="Language selection menu"]');
    readonly basketButton = this.page.locator('[aria-label="Show the shopping cart"]');
    readonly userAccountButton = this.page.locator('//button[@aria-label="Go to user profile"]');
    readonly logoutButton = this.page.locator('#navbarLogoutButton');
    readonly searchResultsPanel = this.page.locator('app-search-result');


    //Functions

    /*     async findButton() {
            //button//*[contains(text(), 'TEXT')]
    
        }
     */





}