import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage } from '../pages/ApiDemosHomePage';
import { ApiDemosViewsPage } from '../pages/ApiDemosViewsPage';
import { ApiDemosAutoCompletePage } from '../pages/ApiDemosAutoCompletePage';

test.describe('API Demos - Views Navigation Suite', () => {
  test('should open the Views category page', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const viewsPage = new ApiDemosViewsPage(screen);

    await homePage.waitForLoad();
    await homePage.openViews();
    await viewsPage.waitForTitle();
  });

  test('should open Auto Complete from Views', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const viewsPage = new ApiDemosViewsPage(screen);
    const autoCompletePage = new ApiDemosAutoCompletePage(screen);

    await homePage.waitForLoad();
    await homePage.openViews();
    await viewsPage.waitForTitle();
    await viewsPage.openItem('Auto Complete');
    await autoCompletePage.waitForPage();
  });

  test('should navigate back from Auto Complete to Views', async ({ screen }) => {
    const homePage = new ApiDemosHomePage(screen);
    const viewsPage = new ApiDemosViewsPage(screen);
    const autoCompletePage = new ApiDemosAutoCompletePage(screen);

    await homePage.waitForLoad();
    await homePage.openViews();
    await viewsPage.waitForTitle();
    await viewsPage.openItem('Auto Complete');
    await autoCompletePage.waitForPage();
    await autoCompletePage.goBack();
    await viewsPage.waitForTitle();
  });
});
