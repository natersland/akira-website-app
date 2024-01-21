export const redirectToPage = (page: string, locale: string = "th"): string => {
  const currentPath = window.location.pathname;
  const desiredPath = `/${locale}/auth/${page}`;

  if (currentPath !== desiredPath) {
    window.location.href = desiredPath;
  }

  return desiredPath;
};
