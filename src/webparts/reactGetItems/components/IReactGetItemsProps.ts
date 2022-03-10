export interface IReactGetItemsProps {
  description: string;
  siteurl: string;
  // isDarkTheme: boolean;
  // environmentMessage: string;
  // hasTeamsContext: boolean;
  // userDisplayName: string;
}

interface Item {
  Title: string;
  Department: string;
}
export interface IReactGetItemsState {
  items: Array<Item>;
}
