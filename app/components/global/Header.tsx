import clsx from 'clsx';

import HeaderActions from '~/components/global/HeaderActions';
import HeaderBackground from '~/components/global/HeaderBackground';
import MobileNavigation from '~/components/global/MobileNavigation';
import Navigation from '~/components/global/Navigation';
import {useRootLoaderData} from '~/root';

// Default navigation links
const DEFAULT_MENU_LINKS = [
  {
    _key: 'products',
    _type: 'linkInternal' as const,
    title: 'Products',
    slug: '/collections/all',
  },
  {
    _key: 'about',
    _type: 'linkInternal' as const,
    title: 'About',
    slug: '/pages/about',
  },
];

/**
 * A server component that specifies the content of the header on the website
 */
export default function Header() {
  const rootData = useRootLoaderData();
  const layout = rootData?.layout;
  const menuLinks = layout?.menuLinks || DEFAULT_MENU_LINKS;

  return (
    <header
      className={clsx(
        'align-center fixed top-0 z-40 flex h-header-sm w-full px-4',
        'md:px-8',
        'lg:h-header-lg',
      )}
      role="banner"
    >
      <HeaderBackground />
      <MobileNavigation menuLinks={menuLinks} />
      <Navigation menuLinks={menuLinks} />
      {/* Accounts, country selector + cart toggle */}
      <HeaderActions />
    </header>
  );
}
