export async function loadHomePage(page) {
  const url = 'http://www.automationpractice.pl/';

  await page.goto(url);
}

// Faded Short Sleeve T-shirts blue variant size 2
export async function addSingleProductToCart(page) {
  const productUrl =
    'http://www.automationpractice.pl/index.php?id_category=3&controller=category';
  await page.goto(productUrl);
  await page.locator('#color_2').click();
  await page.getByLabel('Size').selectOption('2');
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout ' }).click();
}

export async function clearCookies(context) {
  await context.clearCookies()
}
