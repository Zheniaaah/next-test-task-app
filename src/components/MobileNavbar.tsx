'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ROUTES } from '@/config/routes.config';

export default function MobileNavbar() {
  return (
    <NavigationMenu className="flex md:hidden">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>TESTAPP</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href={ROUTES.SETTINGS}>Settings</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
