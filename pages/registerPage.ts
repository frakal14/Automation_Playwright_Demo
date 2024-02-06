import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.components';

export class RegisterPage {
  constructor(private page: Page) {}

  header = new HeaderComponent(this.page);

  async navigateToSignIn(): Promise<void> {
    this.header.signInButton.click();
  }

  createEmailInput = this.page.locator('id=email_create');
  createAccountButton = this.page.getByRole('button', {
    name: ' Create an account',
  });
  invalidEmailAlert = this.page.locator('#create_account_error')

  radioButtonMr = this.page.getByLabel('Mr.');
  firstName = this.page.getByLabel('First name *');
  lastName = this.page.getByLabel('Last name *');
  email = this.page.locator('#email');
  password = this.page.locator('#passwd');
  dobDays = this.page.locator('#days');
  dobMonths = this.page.locator('#months');
  dobYears = this.page.locator('#years');
  newsletterCheck = this.page.getByLabel('Sign up for our newsletter!');
  registerButton = this.page.getByRole('button', { name: 'Register ' });

  accountCreatedAlert = this.page.getByText('Your account has been created.');

  async fillRegisterEmailInput(userEmail: string): Promise<void> {
    await this.createEmailInput.fill(userEmail);
    await this.createAccountButton.click();
  }

  async radioMrChecked(): Promise<void> {
    await this.radioButtonMr.check();
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstName.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastName.fill(lastName);
  }

  async fillPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }

  async pickDateOfBirth(
    day: string,
    month: string,
    year: string,
  ): Promise<void> {
    await this.dobDays.selectOption(day);
    await this.dobMonths.selectOption(month);
    await this.dobYears.selectOption(year);
  }

  async newsletterChecked(): Promise<void> {
    await this.newsletterCheck.check();
  }

  async clickOnRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }
}
