import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: "io.appium.android.apis",
  deviceName: /sdk_gphone|Pixel|emulator/i,
  reporter: [['html', { open: 'never' }]],
});
