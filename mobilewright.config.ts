import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: "io.appium.android.apis",
  deviceName:/Pixel 10/,
  reporter: [['html', { open: 'never' }]],
});
