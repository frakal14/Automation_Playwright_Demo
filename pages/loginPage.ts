import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  emailInput = this.page.locator('#email')
  passwordInput = this.page.getByLabel('Password')
  signInButton = this.page.getByRole('button', { name: ' Sign in' })
  // await page.locator('#email').fill(userEmail);
}
