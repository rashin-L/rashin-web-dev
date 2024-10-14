"use client"
import React, { useState, useEffect, useMemo } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import 'aos/dist/aos.css';
import LanguageProvider from '../components/LangContext';
import { theme as customTheme } from '../theme';
import createEmotionCache from '../utils/createEmotionCache';
import ColorModeContext from '../components/ColorModeContext';
import Layout from '../layout/Layout';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import "./globals.css";

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children ,
  pageProps,
  emotionCache = clientSideEmotionCache,}) {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        window.localStorage.setItem(
          'themeMode',
          mode === 'dark' ? 'light' : 'dark'
        );
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [mode]
  );

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setMode(localTheme) : setMode('dark');
    } catch {
      setMode('dark');
    }
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <html >
      <link rel="shortcut icon" href="logo.png" sizes="32*32" />

      <body  >
        {/* {children} */}
        <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width'
          name='viewport'
        />
        <meta name='description' content="Rashin Web Dev" />
        <meta
          name='keywords'
          content='programming, python, javascript, portfolio, website, fullstack, react, next, django'
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Rashin Web Dev</title>
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={customTheme[mode]}>
          <CssBaseline />
          <LanguageProvider>
            <Layout>
            <I18nextProvider i18n={i18n}>
            {React.cloneElement(children, { ...pageProps })}
              </I18nextProvider>
            </Layout>
          </LanguageProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
        
        </body>
    </html>
  );
}

