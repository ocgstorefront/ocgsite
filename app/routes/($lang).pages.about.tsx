import {type SeoHandleFunction} from '@shopify/hydrogen';
import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import clsx from 'clsx';

import {validateLocale} from '~/lib/utils';

const seo: SeoHandleFunction = () => ({
  title: 'About Us - On Call Gummies',
  description: 'Learn about On Call Gummies - physician-formulated vitamin gummies for healthcare professionals and anyone with a demanding lifestyle.',
});

export const handle = {
  seo,
};

export async function loader({context, params}: LoaderFunctionArgs) {
  validateLocale({context, params});
  return null;
}

export default function AboutPage() {
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
          About On Call Gummies
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-darkGray/80 md:text-xl">
          Physician-formulated vitamins designed for those who never stop.
        </p>
      </section>

      {/* Story Section */}
      <section className={clsx('px-4 pb-16', 'md:px-8')}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-darkGray md:text-3xl">
            Our Story
          </h2>
          <div className="space-y-4 text-darkGray/80">
            <p>
              On Call Gummies was born from a simple observation: healthcare professionals
              and busy individuals often neglect their own wellness while caring for others.
            </p>
            <p>
              Our physician-formulated gummies are designed to deliver essential vitamins
              in a convenient, delicious format that fits into even the busiest schedules.
            </p>
            <p>
              Every product is crafted with premium ingredients, backed by science, and
              made to support energy, immunity, and overall wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={clsx('px-4 pb-16 bg-lightGray rounded-xl mx-4 py-12', 'md:px-8 md:mx-8')}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-darkGray md:text-3xl text-center">
            What Sets Us Apart
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">👨‍⚕️</div>
              <h3 className="mb-2 font-bold text-darkGray">Physician-Formulated</h3>
              <p className="text-sm text-darkGray/70">
                Developed by doctors who understand the demands of healthcare.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🌿</div>
              <h3 className="mb-2 font-bold text-darkGray">Premium Ingredients</h3>
              <p className="text-sm text-darkGray/70">
                Vegan, sugar-free, and made with high-quality nutrients.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-2 font-bold text-darkGray">Designed for Busy Lives</h3>
              <p className="text-sm text-darkGray/70">
                One gummy a day to support your demanding lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={clsx('px-4 py-16', 'md:px-8')}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-darkGray md:text-3xl">
            Get in Touch
          </h2>
          <p className="text-darkGray/80">
            Have questions? We'd love to hear from you.
          </p>
          <p className="mt-4 text-darkGray">
            Email us at{' '}
            <a
              href="mailto:hello@oncallgummies.com"
              className="text-peach hover:underline font-bold"
            >
              hello@oncallgummies.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
