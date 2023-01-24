//for google font 
import { Poppins } from '@next/font/google'
import Head from 'next/head';
//for local font 
import localFont from '@next/font/local'
import CommonLayout from "../src/components/Layout/CommonLayout";
import "../src/styles/common.scss";
const fontPrimary = Poppins({
  weight: ['300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const locFont = localFont({
  src: [
    {
      path: './fonts/TWKEverett-Regular-web.woff2',
      weight: '400',
      style: 'normal',
    },{
      path: './fonts/TWKEverett-Medium-web.woff2',
      weight: '500',
      style: 'normal',
    },{
      path: './fonts/TWKEverett-Light-web.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Mexpansion </title>
    </Head>
      <style jsx global>{`
        html,body {
          font-family: ${locFont.style.fontFamily};
          --bs-body-font-family: ${fontPrimary.style.fontFamily};
        }
      `}</style>
      <CommonLayout >
        <Component {...pageProps} />
      </CommonLayout>
    </>
  );
}

export default MyApp;
