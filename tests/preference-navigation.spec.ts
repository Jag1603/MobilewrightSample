import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';
import { ApiDemosPreferencePage } from '../pages/ApiDemosPreferencePage';
import { ApiDemosPreferencesPage } from '../pages/ApiDemosPreferencesPage';

test.describe('API Demos - Preference Navigation Suite', () => {
  test('should open the Preference category page', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const preferencePage = new ApiDemosPreferencePage(screen);

    await homePage.waitForLoad();
    await homePage.openPreference();
    await preferencePage.waitForTitle();
  });

  test('should open Preferences from Preference', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const preferencePage = new ApiDemosPreferencePage(screen);
    const preferencesPage = new ApiDemosPreferencesPage(screen);

    await homePage.waitForLoad();
    await homePage.openPreference();
    await preferencePage.waitForTitle();
    await preferencePage.openItem('Preferences');
    await preferencesPage.waitForPage();
  });

  test('should navigate back from Preferences to Preference', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const preferencePage = new ApiDemosPreferencePage(screen);
    const preferencesPage = new ApiDemosPreferencesPage(screen);

    await homePage.waitForLoad();
    await homePage.openPreference();
    await preferencePage.waitForTitle();
    await preferencePage.openItem('Preferences');
    await preferencesPage.waitForPage();
    await preferencesPage.goBack();
    await preferencePage.waitForTitle();
  });
});
