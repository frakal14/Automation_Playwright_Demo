import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/loginPage';

test.describe('User login to AutomationPractice', () => {
  let loginPage: LoginPage;
  const userEmail = loginData.userEmail;
  const userPassword = loginData.userPassword;
  const url = 'http://www.automationpractice.pl/';

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(url);
  });

  test('successful login with valid credentials', async ({ page }) => {
    await loginPage.login(userEmail, userPassword);

    await expect(loginPage.accountName).toHaveText(
      loginPage.expectedAccountName,
    );
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    await loginPage.login(loginData.userInvalidEmail, userPassword);

    await expect(loginPage.invalidEmailAlert).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    await loginPage.login(userEmail, loginData.userInvalidPassword);

    await expect(loginPage.invalidPasswordAlert).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    await loginPage.login(userEmail, loginData.userShortPassword);

    await expect(loginPage.invalidShortPasswordAllert).toBeVisible();
  });

  test('successful user logout', async ({ page }) => {
    await loginPage.login(userEmail, userPassword);
    await loginPage.logout();

    await expect(loginPage.header.signInButton).toBeVisible();
  });
});
