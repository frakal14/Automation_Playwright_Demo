import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/header.components";

export class LoginPage {
  constructor(private page: Page) {}

  header = new HeaderComponent(this.page)

  emailInput = this.page.locator('#email')
  passwordInput = this.page.getByLabel('Password')
  signInButton = this.page.getByRole('button', { name: ' Sign in' })
  accountName = this.page.locator('.account')
  invalidEmailAlert = this.page.getByText('Invalid email address.')
  invalidPasswordAlert = this.page.getByText('Authentication failed.')
  invalidShortPasswordAllert = this.page.getByText('Invalid password.')
  expectedAccountName = 'Karol test';
  
  // await page.locator('#email').fill(userEmail);
}
