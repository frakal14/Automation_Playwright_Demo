import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.components';

export class CheckoutPage {
  constructor(private page: Page) {}

  modalCheckoutButton = this.page.getByRole('link', {
    name: 'Proceed to checkout ',
  });
  cartCheckoutButton = this.page.getByRole('link', {
    name: 'Proceed to checkout ',
  });

  termsOfServiceCheckBox = this.page.getByLabel('I agree to the terms of');

  payByCheck = this.page.getByRole('link', { name: 'Pay by check (order' });
  confirmOrderButton = this.page.getByRole('button', {
    name: 'I confirm my order ',
  });

  orderConfirmAlert = this.page.getByText('Your order on My Shop is complete.');

  async clickOnModalCheckoutButton(): Promise<void> {
    await this.modalCheckoutButton.click();
  }

  async clickOnCartCheckoutButton(): Promise<void> {
    await this.cartCheckoutButton.click();
  }

  async clickOnAddressCheckoutButton(): Promise<void> {
    const addressCheckoutButton = `[name='processAddress']`;
    await this.page.click(addressCheckoutButton);
  }

  async clickOnShippingCheckoutButton(): Promise<void> {
    const shippingCheckoutButton = `[name='processCarrier']`;
    await this.page.click(shippingCheckoutButton);
  }

  async checkTermsOfService(): Promise<void> {
    await this.termsOfServiceCheckBox.check();
  }

  async clickOnPayByCheck(): Promise<void> {
    await this.payByCheck.click();
  }

  async clickOnConfirmOrderButton(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
