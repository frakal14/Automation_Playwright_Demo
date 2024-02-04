import { Page } from "@playwright/test";


export  class HeaderComponent {
    constructor(private page: Page)  {}

    signInButton = this.page.getByRole('link', { name: 'Sign in' })

}
