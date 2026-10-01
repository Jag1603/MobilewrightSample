import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: "io.appium.android.apis",
  deviceName: /sdk_gphone16k_x86_64|Pixel/i,
  reporter: [['html', { open: 'never' }]],
});
