import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/PROG-101/PROG101-intro">
            Dive in!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Introduction to programming and Python">
      <HomepageHeader />
      <main>
        <p>Site still under construction... But enjoy whats already here! 🌞</p>
      </main>
    </Layout>
  );
}

    /*<Layout
      title={`${siteConfig.title}`}
      description="Introduction to programming and Python">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>*/