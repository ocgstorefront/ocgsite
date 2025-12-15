import clsx from 'clsx';

import {Link} from '~/components/Link';
import type {SanityLink} from '~/lib/sanity';
import {useRootLoaderData} from '~/root';

// Default footer links
const DEFAULT_FOOTER_LINKS = [
  {
    _key: 'products',
    _type: 'linkInternal' as const,
    title: 'All Products',
    slug: '/collections/all',
  },
  {
    _key: 'cart',
    _type: 'linkInternal' as const,
    title: 'Cart',
    slug: '/cart',
  },
];

/**
 * A component that specifies the content of the footer on the website
 */
export default function Footer() {
  const rootData = useRootLoaderData();
  const layout = rootData?.layout;
  const footer = layout?.footer;
  const links = footer?.links || DEFAULT_FOOTER_LINKS;

  const renderLinks = links.map((link: SanityLink) => {
    if (link._type === 'linkExternal') {
      return (
        <div className="mb-6" key={link._key}>
          <a
            className="linkTextNavigation"
            href={link.url}
            rel="noreferrer"
            target={link.newWindow ? '_blank' : '_self'}
          >
            {link.title}
          </a>
        </div>
      );
    }
    if (link._type === 'linkInternal') {
      if (!link.slug) {
        return null;
      }

      return (
        <div className="mb-6" key={link._key}>
          <Link className="linkTextNavigation" to={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });

  return (
    <footer className="-mt-overlap" role="contentinfo">
      <div
        className={clsx(
          'align-start relative overflow-hidden rounded-xl bg-peach px-4 py-8',
          'md:px-8 md:py-10',
        )}
      >
        <div
          className={clsx(
            'flex flex-col justify-between',
            'md:flex-row',
          )}
        >
          <div className="pb-4">
            <Link to="/" className="text-2xl font-bold text-darkGray">
              On Call Gummies
            </Link>
          </div>

          <div
            className={clsx(
              'my-16 w-full max-w-[22rem] columns-2 gap-x-8 self-start text-md font-bold',
              'md:my-0 md:max-w-[27rem]',
            )}
          >
            {renderLinks}
          </div>
        </div>
        <div className="text-sm text-darkGray">
          © {new Date().getFullYear()} On Call Gummies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
