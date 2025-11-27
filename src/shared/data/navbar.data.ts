import { DashboardIcon, SettingsIcon } from '@/assets/icons';
import { ROUTES } from '@/config/routes.config';

export const NAV_ITEMS = [
  { href: ROUTES.DASHBOARD, value: 'Dashboard', icon: DashboardIcon },
  { href: ROUTES.SETTINGS, value: 'Settings', icon: SettingsIcon },
] as const;
