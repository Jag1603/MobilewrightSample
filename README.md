# Mobilewright Sample

This project is a Mobilewright sample for Android UI automation using the API Demos app.

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18 or later
- npm
- Android Studio with Android SDK
- An Android emulator or a physical Android device connected via ADB
- Java Development Kit (JDK) installed

## Install Android tooling

1. Install Android Studio and the Android SDK.
2. Open Android Studio and install the required Android SDK platforms and tools.
3. Ensure `adb` is available in your terminal:

```bash
adb version
```

4. Create or start an Android emulator. You can list available emulators:

```bash
emulator -list-avds
```

Then start one:

```bash
emulator -avd <your_emulator_name>
```

5. Verify that the device is connected:

```bash
adb devices
```

You should see your emulator or device listed as `device`.

## Clone the repository

```bash
git clone https://github.com/Jag1603/MobilewrightSample.git
cd MobilewrightSample
```

## Install dependencies

```bash
npm install
```

## Run the tests

```bash
npm test
```

This project is configured to run Mobilewright tests against the Android app bundle `io.appium.android.apis` using the configured emulator/device name.

## Useful environment checks

If `adb` or the Android SDK is not found, set the environment variables:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/cmdline-tools/latest/bin
```

On Linux/macOS, the Android SDK path is often:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
```

## Notes

- The test project uses the `mobilewright.config.ts` configuration file.
- The default test directory is `./tests`.
- The app under test is the Android API Demos application.

If you run into issues, confirm that:

- the emulator is started and visible to `adb`
- the Android SDK is configured correctly
- the app package matches the device and environment you are testing on
