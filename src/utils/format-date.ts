export function formatDate(isoString: string) {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
  }).format(date);
}
