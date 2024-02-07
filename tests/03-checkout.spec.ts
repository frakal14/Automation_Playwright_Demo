import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { loginData } from '../test-data/login.data';
import { loadHomePage, addSingleProductToCart } from '../helpers';

test.describe('User checkout on AutomationPractice', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    loadHomePage(page)
    await loginPage.login(loginData.userEmail, loginData.userPassword);
  });

  test('successful login with valid credentials', async ({ page }) => {
    addSingleProductToCart(page)
    
    await page.getByRole('link', { name: 'Proceed to checkout ' }).click();
    await page.getByRole('link', { name: 'Proceed to checkout ' }).click();
    await page.getByRole('button', { name: 'Proceed to checkout ' }).click();
    await page.getByLabel('I agree to the terms of').check();
    await page.getByRole('button', { name: 'Proceed to checkout ' }).click();
    await page.getByRole('link', { name: 'Pay by check (order' }).click();
    await page.getByRole('button', { name: 'I confirm my order ' }).click();
    await page.getByText('Your order on My Shop is').click();
  });
});
