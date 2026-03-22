import { test, expect } from '@playwright/test';

test.describe('EPAM - Services -> Explore Our Client Work', () => {
  test('Navigate to EPAM and open Client Work via Services menu', async ({ page }) => {
    // Go to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Hover the "Services" header menu to reveal submenu
    const servicesLink = page.getByRole('link', { name: /Services/i });
    await servicesLink.hover();

    // Click the "Explore Our Client Work" link
    const exploreLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await exploreLink.click();

    // Verify that the "Client Work" text is visible on the page
    const clientWork = page.getByText(/Client Work/i);
    await expect(clientWork).toBeVisible({ timeout: 10000 });
  });
});
