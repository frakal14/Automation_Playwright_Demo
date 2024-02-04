import { test, expect } from '@playwright/test';

test.describe('User login to AutomationPractice', () => {
  const userEmail = 'test@example.com';
  const userPassword = 'Password123!';

  test.beforeEach(async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/');
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
    const userInvalidPassword = 'Password';
    const expectedPasswordAlert = 'Authentication failed.';

    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userInvalidPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const userShordPassword = 'Pass';
    const expectedPasswordAlert = 'Invalid password.';

    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userShordPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });
});
