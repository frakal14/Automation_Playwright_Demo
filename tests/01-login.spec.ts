import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';

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

    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.locator('.account')).toHaveText(expectedAccountName);
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    const userInvalidEmail = 'testexample.com';
    const expectedEmailAlert = 'Invalid email address.';

    await page.locator('#email').fill(userInvalidEmail);
    await page.getByLabel('Password').fill(userPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedEmailAlert)).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    const userInvalidPassword = loginData.userInvalidPassword;
    const expectedPasswordAlert = 'Authentication failed.';

    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userInvalidPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const userShortPassword = loginData.userShortPassword;
    const expectedPasswordAlert = 'Invalid password.';

    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userShortPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });
});
