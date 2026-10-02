import { test, expect } from '@mobilewright/test';
import { ApiDemosHomePage, type ApiDemosCategory } from '../pages/ApiDemosHomePage';

const categoryMatrix: ApiDemosCategory[] = [
  'App',
  'Animation',
  'Content',
  'Graphics',
  'Media',
  'NFC',
  'OS',
  'Preference',
  'Text',
  'Views',
];

const itemMatrix: Array<{ category: ApiDemosCategory; item: string; expectedTitle: string }> = [
  { category: 'App', item: 'Alert Dialogs', expectedTitle: 'Alert Dialogs' },
  { category: 'Preference', item: 'Preferences', expectedTitle: 'Preferences' },
  { category: 'Views', item: 'Auto Complete', expectedTitle: 'Auto Complete' },
];

test.describe('API Demos - Data Driven Suite', () => {
  for (const category of categoryMatrix) {
    test(`should open the ${category} category`, async ({ screen }) => {
      const homePage = new ApiDemosHomePage(screen);

      await homePage.waitForLoad();
      await homePage.openCategory(category);

      const destination = screen.getByText(category);
      await destination.waitFor({ timeout: 15000 });
      await expect(await destination.isVisible()).toBe(true);
    });
  }

  for (const route of itemMatrix) {
    test(`should open ${route.item} from ${route.category}`, async ({ screen }) => {
      const homePage = new ApiDemosHomePage(screen);

      await homePage.waitForLoad();
      await homePage.openCategory(route.category);

      const page = screen.getByText(route.category);
      await page.waitFor({ timeout: 15000 });

      const item = screen.getByText(route.item);
      await item.waitFor({ timeout: 15000 });
      await item.tap({ timeout: 15000 });

      const detail = screen.getByText(route.expectedTitle);
      await detail.waitFor({ timeout: 15000 });
      await expect(await detail.isVisible()).toBe(true);
    });
  }
});
