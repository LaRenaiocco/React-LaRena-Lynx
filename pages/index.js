import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '@components/Layout'
import utilStyles from '@styles/utils.module.css'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Circus clown turned software engineer.</p>
      </section>
      <div>
          Read{' '}
          <Link href="posts/first-post">
            <a>this page!</a>
          </Link>
      </div>
      <Footer />
    </Layout>
  )
}
