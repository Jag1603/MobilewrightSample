import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';
import { ApiDemosAppPage } from '../pages/ApiDemosAppPage';
import { ApiDemosAlertDialogsPage } from '../pages/ApiDemosAlertDialogsPage';

test.describe('API Demos - App Navigation Suite', () => {
  test('should open the App category page', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const appPage = new ApiDemosAppPage(screen);

    await homePage.waitForLoad();
    await homePage.openApp();
    await appPage.waitForTitle();
    await expect(await appPage.waitForTitle()).toBeUndefined();
  });

  test('should open Alert Dialogs from App', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const appPage = new ApiDemosAppPage(screen);
    const alertPage = new ApiDemosAlertDialogsPage(screen);

    await homePage.waitForLoad();
    await homePage.openApp();
    await appPage.waitForTitle();
    await appPage.openItem('Alert Dialogs');
    await alertPage.waitForPage();
  });

  test('should navigate back from Alert Dialogs to App', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const appPage = new ApiDemosAppPage(screen);
    const alertPage = new ApiDemosAlertDialogsPage(screen);

    await homePage.waitForLoad();
    await homePage.openApp();
    await appPage.waitForTitle();
    await appPage.openItem('Alert Dialogs');
    await alertPage.waitForPage();
    await alertPage.goBack();
    await appPage.waitForTitle();
  });
});
