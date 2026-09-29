import { expect } from '@mobilewright/test';

export class ApiDemosHomePage {
  private screen: any;

  // Locators
  readonly title: any;
  readonly accessibility: any;
  readonly animation: any;
  readonly app: any;
  readonly content: any;
  readonly graphics: any;
  readonly media: any;
  readonly nfc: any;
  readonly os: any;
  readonly preference: any;
  readonly text: any;
  readonly views: any;

  constructor(screen: any) {
    this.screen = screen;

    this.title = screen.getByText('API Demos');
    this.accessibility = screen.getByText('Accessibility');
    this.animation = screen.getByText('Animation');
    this.app = screen.getByText('App');
    this.content = screen.getByText('Content');
    this.graphics = screen.getByText('Graphics');
    this.media = screen.getByText('Media');
    this.nfc = screen.getByText('NFC');
    this.os = screen.getByText('OS');
    this.preference = screen.getByText('Preference');
    this.text = screen.getByText('Text');
    this.views = screen.getByText('Views');
  }

  

  async openApp() {
    await this.app.click();
  }

  async openAnimation() {
    await this.animation.click();
  }

  async openContent() {
    await this.content.click();
  }

  async openGraphics() {
    await this.graphics.click();
  }

  async openMedia() {
    await this.media.click();
  }

  async openNfc() {
    await this.nfc.click();
  }

  async openOs() {
    await this.os.click();
  }

  async openPreference() {
    await this.preference.click();
  }

  async openText() {
    await this.text.click();
  }

  async openViews() {
    await this.views.click();
  }
}