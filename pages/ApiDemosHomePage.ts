import { expect } from '@mobilewright/test';

export type ApiDemosCategory =
  | 'Accessibility'
  | 'Animation'
  | 'App'
  | 'Content'
  | 'Graphics'
  | 'Media'
  | 'NFC'
  | 'OS'
  | 'Preference'
  | 'Text'
  | 'Views';

export class ApiDemosHomePage {
  private screen: any;

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

  private readonly categoryMap: Record<ApiDemosCategory, any>;

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

    this.categoryMap = {
      Accessibility: this.accessibility,
      Animation: this.animation,
      App: this.app,
      Content: this.content,
      Graphics: this.graphics,
      Media: this.media,
      NFC: this.nfc,
      OS: this.os,
      Preference: this.preference,
      Text: this.text,
      Views: this.views,
    };
  }

  async waitForLoad(): Promise<void> {
    await this.title.waitFor({ timeout: 15000 });
  }

  async assertCategoryVisible(category: ApiDemosCategory): Promise<void> {
    const locator = this.categoryMap[category];
    await locator.waitFor({ timeout: 15000 });
    await expect(await locator.isVisible()).toBe(true);
  }

  async openCategory(category: ApiDemosCategory): Promise<void> {
    const locator = this.categoryMap[category];
    await locator.waitFor({ timeout: 15000 });
    await locator.tap({ timeout: 15000 });
  }

  async openCategoryAndVerify(category: ApiDemosCategory): Promise<void> {
    await this.openCategory(category);
    const destination = this.screen.getByText(category);
    await destination.waitFor({ timeout: 15000 });
    await expect(await destination.isVisible()).toBe(true);
  }

  async openAccessibility(): Promise<void> {
    await this.openCategory('Accessibility');
  }

  async openApp(): Promise<void> {
    await this.openCategory('App');
  }

  async openAnimation(): Promise<void> {
    await this.openCategory('Animation');
  }

  async openContent(): Promise<void> {
    await this.openCategory('Content');
  }

  async openGraphics(): Promise<void> {
    await this.openCategory('Graphics');
  }

  async openMedia(): Promise<void> {
    await this.openCategory('Media');
  }

  async openNfc(): Promise<void> {
    await this.openCategory('NFC');
  }

  async openOs(): Promise<void> {
    await this.openCategory('OS');
  }

  async openPreference(): Promise<void> {
    await this.openCategory('Preference');
  }

  async openText(): Promise<void> {
    await this.openCategory('Text');
  }

  async openViews(): Promise<void> {
    await this.openCategory('Views');
  }
}