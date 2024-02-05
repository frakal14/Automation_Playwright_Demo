import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/loginPage';

test.describe('User login to AutomationPractice', () => {
  let loginPage: LoginPage;
  const url = 'http://www.automationpractice.pl/';

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(url);
    await loginPage.header.signInButton.click();
  });

  test('successful login with valid credentials', async ({ page }) => {
   


  });







  });
