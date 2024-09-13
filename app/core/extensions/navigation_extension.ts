export abstract class NavigationExtension {
  abstract openUrl(url: string): void;
  abstract redirectToPage(page: string, locale: string): string;
}

export class NavigationExtensionImpl implements NavigationExtension {
  openUrl(url: string): void {
    window.open(url, "_blank");
  }
  redirectToPage = (page: string, locale: string = "th"): string => {
    const currentPath = window.location.pathname;
    const desiredPath = `/${locale}/auth/${page}`;
  
    if (currentPath !== desiredPath) {
      window.location.href = desiredPath;
    }
  
    return desiredPath;
  };
}