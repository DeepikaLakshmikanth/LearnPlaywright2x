import { test, expect } from '@playwright/test';

test('my first playwright test', async ({ page }) => {
    // 1. Navigate to a website
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.waitForTimeout(1000);

    // // 2. Interact with elements using locators
    // const getStarted = page.getByRole('link', { name: 'Get started' });
    // await getStarted.click();

    // // 3. Make an assertion
    // await expect(page).toHaveURL(/.*intro/);
});
