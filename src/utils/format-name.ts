export function formatName(name: string | null | undefined): string {
  if (!name) return '';

  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0];
  }

  const firstName = parts[0];
  const secondName = parts[1];

  return `${firstName} ${secondName[0].toUpperCase()}.`;
}
