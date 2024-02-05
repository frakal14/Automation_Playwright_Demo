import { test, expect } from '@playwright/test';
import { registerData } from '../test-data/register.data';
import { RegisterPage } from '../pages/registerPage';

test.describe('User register to AutomationPractice', () => {
  let registerPage: RegisterPage;
  const url = 'http://www.automationpractice.pl/';

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto(url);
    await registerPage.header.signInButton.click();
  });

  test('successful register with valid credentials', async ({ page }) => {
    await registerPage.fillRegisterEmailInput(registerData.email);
    await registerPage.radioMrChecked();
    await registerPage.fillFirstName(registerData.firstName);
    await registerPage.fillLastName(registerData.lastName);
    expect(registerPage.email).toHaveValue(registerData.email);
    await registerPage.fillPassword(registerData.password);
    await registerPage.pickDateOfBirth('10', '5', '1990');
    await registerPage.newsletterChecked();
    await registerPage.clickOnRegisterButton();
    expect(registerPage.accountCreatedAlert).toBeVisible;
  });
});
