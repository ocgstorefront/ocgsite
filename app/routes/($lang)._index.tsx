import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType, type SeoHandleFunction, Image, Money} from '@shopify/hydrogen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import clsx from 'clsx';

import {Link} from '~/components/Link';
import {validateLocale} from '~/lib/utils';

const seo: SeoHandleFunction = () => ({
  title: 'On Call Gummies - Premium Vitamin Gummies',
  description: 'Premium vitamin gummies for your daily wellness. Shop our Vitamin B-12 and Vitamin D gummies.',
});

export const handle = {
  seo,
};

export async function loader({context, params}: LoaderFunctionArgs) {
  validateLocale({context, params});

  // Fetch all products from Shopify
  const {products} = await context.storefront.query<{products: {nodes: Product[]}}>(
    PRODUCTS_QUERY,
    {
      variables: {
        first: 20,
      },
    }
  );

  return defer({
    products: products.nodes,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  });
}

export default function Index() {
  const {products} = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className={clsx(
          'flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center',
          'md:px-8 md:pt-40 md:pb-24',
        )}
      >
        <h1 className="text-4xl font-bold text-darkGray md:text-6xl">
          On Call Gummies
        </h1>
        <p className="mt-4 max-w-xl text-lg text-darkGray/80 md:text-xl">
          Premium vitamin gummies for your daily wellness routine
        </p>
        <Link
          to="/collections/all"
          className={clsx(
            'mt-8 rounded-full bg-darkGray px-8 py-3 text-sm font-bold text-white',
            'hover:bg-darkGray/90 transition-colors',
          )}
        >
          Shop All Products
        </Link>
      </section>

      {/* Products Section */}
      <section className={clsx('px-4 pb-32', 'md:px-8')}>
        <h2 className="mb-8 text-2xl font-bold text-darkGray md:text-3xl">
          Our Products
        </h2>

        {products.length === 0 ? (
          <div className="rounded-xl bg-lightGray p-8 text-center">
            <p className="text-darkGray">No products available yet. Add products in your Shopify admin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ProductCard({product}: {product: Product}) {
  const firstVariant = product.variants.nodes[0];
  const image = product.featuredImage;

  return (
    <Link
      to={`/products/${product.handle}`}
      className={clsx(
        'group flex flex-col overflow-hidden rounded-xl bg-lightGray',
        'transition-transform hover:scale-[1.02]',
      )}
    >
      {image ? (
        <div className="aspect-square overflow-hidden bg-white">
          <Image
            data={image}
            aspectRatio="1/1"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-square bg-peach flex items-center justify-center">
          <span className="text-4xl">🍬</span>
        </div>
      )}

      <div className="flex flex-col p-4">
        <h3 className="font-bold text-darkGray">{product.title}</h3>
        {product.description && (
          <p className="mt-1 text-sm text-darkGray/70 line-clamp-2">
            {product.description}
          </p>
        )}
        {firstVariant?.price && (
          <div className="mt-2">
            <Money
              data={firstVariant.price}
              className="text-lg font-bold text-darkGray"
            />
          </div>
        )}
      </div>
    </Link>
  );
}

const PRODUCTS_QUERY = `#graphql
  query Products($first: Int!) {
    products(first: $first) {
      nodes {
        id
        title
        handle
        description
        featuredImage {
          id
          url
          altText
          width
          height
        }
        variants(first: 1) {
          nodes {
            id
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
