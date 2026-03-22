import { test, expect } from '@playwright/test';

test('EPAM - Services -> Explore Our Client Work', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  // Open Services menu (hover to reveal submenu)
  await page.getByRole('link', { name: 'Services' }).hover();

  // Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible({ timeout: 10000 });
});
