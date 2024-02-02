import { test, expect } from '@playwright/test';

test.describe('User login to AutomationPractice', () => {
  test('successful login with valid credentials', async ({ page }) => {
    const url = 'http://www.automationpractice.pl/index.php?';
    const userEmail = 'test@example.com';
    const userPassword = 'Password123!';
    const expectedAccountName = 'Karol test';

    await page.goto(url);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.locator('.account')).toHaveText(expectedAccountName);
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    const url = 'http://www.automationpractice.pl/index.php?';
    const userInvalidEmail = 'testexample.com';
    const userPassword = 'Password123!';
    const expectedEmailAlert = 'Invalid email address.';

    await page.goto(url);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill(userInvalidEmail);
    await page.getByLabel('Password').fill(userPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedEmailAlert)).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    const url = 'http://www.automationpractice.pl/index.php?';
    const userEmail = 'test@example.com';
    const userInvalidPassword = 'Password';
    const expectedPasswordAlert = 'Authentication failed.';

    await page.goto(url);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userInvalidPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const url = 'http://www.automationpractice.pl/index.php?';
    const userEmail = 'test@example.com';
    const userShordPassword = 'Pass';
    const expectedPasswordAlert = 'Invalid password.';

    await page.goto(url);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill(userEmail);
    await page.getByLabel('Password').fill(userShordPassword);
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText(expectedPasswordAlert)).toBeVisible();
  });
});
