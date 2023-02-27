import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import SearchPage from '../pages/searchPage';
import * as data from "../test-data/login-credentials.json";

test('User should be able to login and logout', async ({ page, baseURL }) => {
    const searchPage = new SearchPage(page);
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}`);

    await test.step('login', async () => {

        await searchPage.closeBannerButton.click();
        await searchPage.cookiesButton.click();
        await searchPage.accountButton.click();
        await searchPage.loginButton.click();
        await loginPage.emailTextField.click();
        await loginPage.emailTextField.type(data.email);
        await loginPage.passwordTextField.type(data.passWord);
        await loginPage.loginAccessButton.click();
        await searchPage.accountButton.click();
        await searchPage.searchResultsPanel.waitFor({ state: "visible" });
        await expect(searchPage.userAccountButton).toContainText(data.email);
        await expect(searchPage.basketButton).toBeVisible();
        await expect(searchPage.loginButton).toBeHidden();

    })

    await test.step('logout', async () => {
        await searchPage.logoutButton.click();
        await expect(searchPage.userAccountButton).toBeHidden();
        await expect(searchPage.basketButton).toBeHidden();

    })

});