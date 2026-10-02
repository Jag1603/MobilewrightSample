
import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';

test('app launches and shows home screen', async ({ screen }) => {
  const homePage = new ApiDemosHomePage(screen);
  await homePage.waitForLoad();
  await expect(await homePage.app.isVisible()).toBe(true);
});

test.describe('API Demos - Smoke Suite', () => {
  test('should launch API Demos', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.title.isVisible()).toBe(true);
  });

  test('should display App category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.app.isVisible()).toBe(true);
  });

  test('should display Animation category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.animation.isVisible()).toBe(true);
  });
});