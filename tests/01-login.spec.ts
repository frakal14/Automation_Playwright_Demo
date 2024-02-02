import { test, expect } from '@playwright/test';

test.describe('User login to AutomationPractice', () => {

  test('successful login with valid credentials', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill('test@example.com');
    await page.getByLabel('Password').fill('Password123!');
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.locator('.account')).toHaveText('Karol test')
  });

  test('unsuccessful login with invalid email', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill('testexample.com');
    await page.getByLabel('Password').fill('Password123!');
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText('Invalid email address.')).toBeVisible();
  });

  test('unsuccessful login with invalid password', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill('test@example.com');
    await page.getByLabel('Password').fill('Password');
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText('Authentication failed.')).toBeVisible();
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email').fill('test@example.com');
    await page.getByLabel('Password').fill('Pass');
    await page.getByRole('button', { name: ' Sign in' }).click();

    await expect(page.getByText('Invalid password.')).toBeVisible();
  });
  

});