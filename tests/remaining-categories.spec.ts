import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';

test.describe('API Demos - Remaining Categories Suite', () => {
  test('should open Animation category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openAnimation();
    await expect(await screen.getByText('Animation').isVisible()).toBe(true);
  });

  test('should open Content category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openContent();
    await expect(await screen.getByText('Content').isVisible()).toBe(true);
  });

  test('should open Graphics category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openGraphics();
    await expect(await screen.getByText('Graphics').isVisible()).toBe(true);
  });

  test('should open Media category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openMedia();
    await expect(await screen.getByText('Media').isVisible()).toBe(true);
  });

  test('should open NFC category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openNfc();
    await expect(await screen.getByText('NFC').isVisible()).toBe(true);
  });

  test('should open OS category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openOs();
    await expect(await screen.getByText('OS').isVisible()).toBe(true);
  });

  test('should open Text category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);

    await homePage.waitForLoad();
    await homePage.openText();
    await expect(await screen.getByText('Text').isVisible()).toBe(true);
  });
});
