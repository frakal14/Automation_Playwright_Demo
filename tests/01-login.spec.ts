import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/loginPage';

test.describe('User login to AutomationPractice', () => {
  const userEmail = loginData.userEmail;
  const userPassword = loginData.userPassword;
  const url = 'http://www.automationpractice.pl/';

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  test('successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.signInButton.click();

    await expect(loginPage.accountName).toHaveText(loginPage.expectedAccountName);
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(loginData.userInvalidEmail);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.signInButton.click();

    await expect(loginPage.invalidEmailAlert).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(loginData.userInvalidPassword);
    await loginPage.signInButton.click();

    await expect(loginPage.invalidPasswordAlert).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(loginData.userShortPassword);
    await loginPage.signInButton.click();

    await expect(loginPage.invalidShortPasswordAllert).toBeVisible();
  });
});
