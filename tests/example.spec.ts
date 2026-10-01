
import { test, expect } from '@mobilewright/test';

test('app launches and shows home screen', async ({ screen }) => {
  await expect(screen.getByText('App')).toBeVisible();
});


// test('API Demos home screen', async ({ screen }) => {
 
//   await expect(screen.getByText('API Demos')).toBeVisible();
//   await expect(screen.getByText('App')).toBeVisible();
//   await expect(screen.getByText('Animation')).toBeVisible();
//   await expect(screen.getByText('Content')).toBeVisible();
//   await expect(screen.getByText('Graphics')).toBeVisible();
//   await expect(screen.getByText('Media')).toBeVisible();
//   await expect(screen.getByText('NFC')).toBeVisible();
//   await expect(screen.getByText('OS')).toBeVisible();
//   await expect(screen.getByText('Preference')).toBeVisible();
//   await expect(screen.getByText('Text')).toBeVisible();
//   await expect(screen.getByText('Views')).toBeVisible();
// });



test.describe('API Demos - Smoke Suite', () => {

  test('should launch API Demos', async ({ screen }) => {

    await expect(
      screen.getByText('API Demos')
    ).toBeVisible();

  });

  test('should display App category', async ({ screen }) => {

    await expect(
      screen.getByText('App')
    ).toBeVisible();

  });

  test('should display Animation category', async ({ screen }) => {

    await expect(
      screen.getByText('Animation')
    ).toBeVisible();

  });

});


test.describe('API Demos - Home Screen Suite', () => {

  test.beforeEach(async ({ screen }) => {

    await expect(
      screen.getByText('API Demos')
    ).toBeVisible();

  });

  test('should display App category', async ({ screen }) => {

    await expect(
      screen.getByText('App')
    ).toBeVisible();

  });

  test('should display Animation category', async ({ screen }) => {

    await expect(
      screen.getByText('Animation')
    ).toBeVisible();

  });

  test('should display Content category', async ({ screen }) => {

    await expect(
      screen.getByText('Content')
    ).toBeVisible();

  });

  test('should display Graphics category', async ({ screen }) => {

    await expect(
      screen.getByText('Graphics')
    ).toBeVisible();

  });

  test('should display Media category', async ({ screen }) => {

    await expect(
      screen.getByText('Media')
    ).toBeVisible();

  });

  test('should display NFC category', async ({ screen }) => {

    await expect(
      screen.getByText('NFC')
    ).toBeVisible();

  });

  test('should display OS category', async ({ screen }) => {

    await expect(
      screen.getByText('OS')
    ).toBeVisible();

  });

  test('should display Preference category', async ({ screen }) => {

    await expect(
      screen.getByText('Preference')
    ).toBeVisible();

  });

  test('should display Text category', async ({ screen }) => {

    await expect(
      screen.getByText('Text')
    ).toBeVisible();

  });

  test('should display Views category', async ({ screen }) => {

    await expect(
      screen.getByText('Views')
    ).toBeVisible();

  });

});