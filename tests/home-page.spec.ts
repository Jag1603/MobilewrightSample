import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';

test.describe('API Demos - Home Page Suite', () => {
  test('should launch the app and show the home screen title', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await expect(await homePage.title.isVisible()).toBe(true);
  });

  test('should show all top-level categories on the home screen', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const categories = [
      homePage.app,
      homePage.animation,
      homePage.content,
      homePage.graphics,
      homePage.media,
      homePage.nfc,
      homePage.os,
      homePage.preference,
      homePage.text,
      homePage.views,
    ];

    await homePage.waitForLoad();

    for (const category of categories) {
      await expect(await category.isVisible()).toBe(true);
    }
  });
});
