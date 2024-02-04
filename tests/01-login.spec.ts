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
    const expectedAccountName = 'Karol test';
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.signInButton.click();

    await expect(page.locator('.account')).toHaveText(expectedAccountName);
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    const userInvalidEmail = loginData.userInvalidEmail;
    const expectedEmailAlert = 'Invalid email address.';
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userInvalidEmail);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.signInButton.click();

    await expect(page.getByText(expectedEmailAlert)).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    const userInvalidPassword = loginData.userInvalidPassword;
    const expectedPasswordAlert = 'Authentication failed.';
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(userInvalidPassword);
    await loginPage.signInButton.click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const userShortPassword = loginData.userShortPassword;
    const expectedPasswordAlert = 'Invalid password.';
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(userEmail);
    await loginPage.passwordInput.fill(userShortPassword);
    await loginPage.signInButton.click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });
});
