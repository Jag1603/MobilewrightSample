import { expect } from '@mobilewright/test';

export class ApiDemosCategoryPage {
  protected screen: any;
  protected readonly pageTitle: string;

  constructor(screen: any, pageTitle: string) {
    this.screen = screen;
    this.pageTitle = pageTitle;
  }

  async waitForTitle(): Promise<void> {
    const title = this.screen.getByText(this.pageTitle);
    await title.waitFor({ timeout: 15000 });
    await expect(await title.isVisible()).toBe(true);
  }

  async openItem(itemText: string): Promise<void> {
    const item = this.screen.getByText(itemText);
    await item.waitFor({ timeout: 15000 });
    await item.tap({ timeout: 15000 });
  }

  async goBack(): Promise<void> {
    if (typeof this.screen.pressBack === 'function') {
      await this.screen.pressBack();
      return;
    }

    await this.screen.back();
  }
}
