import Head from 'next/head'
import Articles from '../components/Articles'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="images/favicon-32x32.png" />
      </Head>
      <Navbar />

      <Main />
      <Features />
      <Articles />
      <Footer />
    </div>
  )
}
