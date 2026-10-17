import { test, expect } from '@playwright/test';

test('resume content, language switching, navigation, and contact links', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.getByRole('heading', { name: 'ประสบการณ์ทำงาน' })).toBeVisible();
  await expect(page.locator('.job')).toHaveCount(5);
  await expect.poll(() => page.locator('.portrait-wrap img').evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  await page.screenshot({ path: `/tmp/bank-resume-${testInfo.project.name}.jpg`, fullPage: true, quality: 65 });
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('button', { name: 'English', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('heading', { name: 'Work experience' })).toBeVisible();
  await expect(page.getByText('4 September 1999')).toBeVisible();
  await expect(page.getByText('MapleCity M1(804) 66/1 Moo 1, Khlong Chet, Khlong Luang, Pathum Thani 12120')).toBeVisible();
  await expect(page.getByRole('link', { name: /naruesorn.wt@gmail.com/ })).toHaveAttribute('href', 'mailto:naruesorn.wt@gmail.com');
  await expect(page.locator('a[href="tel:+66952841879"]')).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Skills', exact: true }).click();
  await expect(page).toHaveURL(/#skills$/);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download CV' }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('Naruesorn-Wattanapipat-Resume.pdf');
  expect(await download.failure()).toBeNull();
  await page.getByRole('button', { name: 'ภาษาไทย', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.getByRole('heading', { name: 'ทักษะและเครื่องมือ' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('narrow screens fit and keyboard navigation exposes the skip link', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'ข้ามไปยังเนื้อหา' })).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
