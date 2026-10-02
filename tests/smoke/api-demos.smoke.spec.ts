import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../../pages/ApiDemosHomePage';

const appBundleId = 'io.appium.android.apis';

test.beforeEach(async ({ device }) => {
  await device.launchApp(appBundleId);
});

test.describe('API Demos - Smoke Suite', () => {

  test('should launch API Demos application', async ({ screen }) => {
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

  test('should display Content category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.content.isVisible()).toBe(true);
  });

  test('should display Graphics category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.graphics.isVisible()).toBe(true);
  });

  test('should display Media category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.media.isVisible()).toBe(true);
  });

  test('should display NFC category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.nfc.isVisible()).toBe(true);
  });

  test('should display OS category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.os.isVisible()).toBe(true);
  });

  test('should display Preference category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.preference.isVisible()).toBe(true);
  });

  test('should display Text category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.text.isVisible()).toBe(true);
  });

  test('should display Views category', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    await homePage.waitForLoad();
    await expect(await homePage.views.isVisible()).toBe(true);
  });
});