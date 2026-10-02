export type ApiDemosNavigationItem = {
  itemText: string;
  expectedPageTitle: string;
};

export type ApiDemosNavigationEntry = {
  category: string;
  items: ApiDemosNavigationItem[];
};

export const apiDemosNavigationCatalog: ApiDemosNavigationEntry[] = [
  {
    category: 'App',
    items: [
      { itemText: 'Alert Dialogs', expectedPageTitle: 'Alert Dialogs' },
      { itemText: 'Activity', expectedPageTitle: 'Activity' },
      { itemText: 'Fragment', expectedPageTitle: 'Fragment' },
      { itemText: 'Notification', expectedPageTitle: 'Notification' },
    ],
  },
  {
    category: 'Preference',
    items: [
      { itemText: 'Preferences', expectedPageTitle: 'Preferences' },
      { itemText: 'Launching Preferences', expectedPageTitle: 'Launch Preferences' },
    ],
  },
  {
    category: 'Views',
    items: [
      { itemText: 'Auto Complete', expectedPageTitle: 'Auto Complete' },
      { itemText: 'Buttons', expectedPageTitle: 'Buttons' },
      { itemText: 'TextFields', expectedPageTitle: 'TextFields' },
    ],
  },
];
