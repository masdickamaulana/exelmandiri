// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Import CSS global
import { LanguageProvider } from '../context/LanguageContext'; // Import Language Context

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Exel Mandiri Inovasi</title> {/* Nama Tab */}
        <meta name="description" content="Website Resmi Exel Mandiri Inovasi" />

        {/* Favicon pakai logo.png */}
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>

      {/* Bungkus semua halaman dengan LanguageProvider */}
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
