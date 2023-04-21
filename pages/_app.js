//import npm packages
import React, { useState, useEffect } from 'react';

//import next js packages
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Alegreya_Sans, Montserrat, IBM_Plex_Sans } from '@next/font/google';
import Script from 'next/script';

//import styles
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Gs from '../styles/theme.config';

//import components
import Header from '../components/header';

//lazy loading of components
const Footer = dynamic(() => import('../components/footer'));
const ScrollButton = dynamic(() => import('../components/scrollButton'));
const LoadingBar = dynamic(() => import('react-top-loading-bar'));

//fonts declaration
const alegreya = Alegreya_Sans({
  weight: ['100', '300', '400', '500', '700'],
  variable: '--alegreya-font',
  display: 'swap',
});
const montserrat = Montserrat({
  weight: '700',
  variable: '--montserrat-font',
  display: 'swap',
});
const ibmSans = IBM_Plex_Sans({
  weight: ['400', '600'],
  variable: '--ibmSans-font',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [isDark, setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);
  const [isDarkThemeDisabled, setIsDarkThemeDisabled] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  //change the window dimension when window is resized
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    if (typeof window !== 'undefined' && width && height) {
      if (width < height) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [width, height]);

  //get the window dimensions when page rendered first time
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const [allCategories, setAllCategories] = useState([]);

  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleRouteComplete = () => {
      setProgress(100);
    };
    const handleRouteStart = () => {
      setProgress(40);
    };
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.on('routeChangeStart', handleRouteStart);
    };
  }, [router.events]);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'false') {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }, [setDarkTheme]);

  const isServer = typeof window === 'undefined';
  const WOW = !isServer ? require('wow.js') : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      new WOW().init();
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-54H8XPB');`,
        }}
      ></Script>
      <Script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"></Script>
      <Script src="https://unpkg.com/smoothscroll-anchor-polyfill"></Script>
      <style jsx global>{`
        :root {
          --alegreya-font: ${alegreya.style.fontFamily};
          --ibmSans-font: ${ibmSans.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <LoadingBar
        color="#733bad"
        waitingTime={300}
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ThemeProvider theme={selectedTheme}>
        <Gs.GlobalStyle />
        <section className="MainBox clearfix">
          <Header
            isDarkTheme={isDark}
            setDarkTheme={(value) => setDarkTheme(value)}
            allCategories={allCategories}
            setIsDarkThemeDisabled={(value) => setIsDarkThemeDisabled(value)}
            isDarkThemeDisabled={isDarkThemeDisabled}
          />
          <Component
            {...pageProps}
            isDarkTheme={isDark}
            setAllCategories={(value) => {
              setAllCategories(value);
            }}
            isMobile={isMobile}
          />
          <Footer />
          <ScrollButton isDarkTheme={isDark} />
        </section>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
