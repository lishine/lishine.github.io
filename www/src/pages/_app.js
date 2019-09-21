import React from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { PageTransition } from 'next-page-transitions'

import { GlobalCss, theme } from 'styles/theme'
import { Header } from 'features/header/Header'
import { Footer } from 'features/footer/Footer'
import { Flex } from 'styles/ss-components'

import 'scss/fonts.css'
import 'scss/index.scss'

export const redirect = (ctx, path) => {
    if (process.browser) {
        nextRouter.push(path)
    } else {
        ctx.res.writeHead(301, { Location: path })
        ctx.res.end()
    }
}

const fixChromeReactBug = () => {
    const EVENTS_TO_MODIFY = [
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel',
        'wheel',
    ]

    const originalAddEventListener = document.addEventListener.bind()
    document.addEventListener = (type, listener, options, wantsUntrusted) => {
        let modOptions = options
        if (EVENTS_TO_MODIFY.includes(type)) {
            if (typeof options === 'boolean') {
                modOptions = {
                    capture: options,
                    passive: false,
                }
            } else if (typeof options === 'object') {
                modOptions = {
                    ...options,
                    passive: false,
                }
            }
        }

        return originalAddEventListener(type, listener, modOptions, wantsUntrusted)
    }

    const originalRemoveEventListener = document.removeEventListener.bind()
    document.removeEventListener = (type, listener, options) => {
        let modOptions = options
        if (EVENTS_TO_MODIFY.includes(type)) {
            if (typeof options === 'boolean') {
                modOptions = {
                    capture: options,
                    passive: false,
                }
            } else if (typeof options === 'object') {
                modOptions = {
                    ...options,
                    passive: false,
                }
            }
        }
        return originalRemoveEventListener(type, listener, modOptions)
    }
}

export let globalCtx

class MyApp extends App {
    constructor(props) {
        super(props)
        if (process.browser) {
            console.log('* BROWSER in constructor')
        } else {
            console.log('* SERVER in constructor')
        }
    }
    render() {
        const { Component, pageProps, router } = this.props
        if (process.browser) {
            // window.addEventListener('resize', () => {
            // let vh = window.innerHeight * 0.01
            // document.documentElement.style.setProperty('--vh', `${vh}px`)
            // })
            console.log('$ BROWSER in render _app')
        } else {
            console.log('$ SERVER in render _app')
        }
        const isResumePage = router.pathname === '/resume'
        const footerHeight = 66
        const mobileHeaderHeight = 56
        return (
            <div>
                <Head>
                    <style>
                        {`

/* lato-300 - latin */
@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'),
         url('../fonts/lato-v16-latin-300.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
    font-display: swap;
  }
  /* lato-300italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: local('Lato Light Italic'), local('Lato-LightItalic'),
         url('../fonts/lato-v16-latin-300italic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
         font-display: swap;

  }
  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'),
         url('../fonts/lato-v16-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
         font-display: swap;
        }
  /* lato-italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'),
         url('../fonts/lato-v16-latin-italic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
         font-display: swap;
        }
  /* lato-700 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'),
         url('../fonts/lato-v16-latin-700.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
         font-display: swap;
        }

        /* oswald-regular - latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/oswald-v25-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
    }
/* oswald-500 - latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('../fonts/oswald-v25-latin-500.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
    }
/* oswald-600 - latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/oswald-v25-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
    }

    /* crimson-pro-regular - latin */
@font-face {
  font-family: 'Crimson Pro';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/crimson-pro-v7-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
}
/* crimson-pro-italic - latin */
@font-face {
  font-family: 'Crimson Pro';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url('../fonts/crimson-pro-v7-latin-italic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
}
/* crimson-pro-600 - latin */
@font-face {
  font-family: 'Crimson Pro';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/crimson-pro-v7-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
       font-display: swap;
}

`}
                    </style>
                    {isResumePage ? (
                        <meta charSet="utf-8" name="viewport" content="width=1168" />
                    ) : (
                        <meta
                            charSet="utf-8"
                            name="viewport"
                            content="width=device-width, initial-scale=1, shrink-to-fit=no"
                        />
                    )}
                    {/* <link
                        href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700|Oswald:400,500,600|Crimson+Pro:400,400i,600&display=swap"
                        rel="stylesheet"
                        // as="style"
                        // onLoad="this.onload=null;this.rel='stylesheet'"
                    /> */}
                    <link rel="icon" type="image/x-icon" href="/favicon.png" />
                </Head>

                <ThemeProvider theme={theme}>
                    <GlobalCss />
                    <Flex flexDirection="column" className="page-container">
                        <Header mobileHeaderHeight={mobileHeaderHeight} />
                        <Flex
                            flexDirection="column"
                            pb={[
                                `${footerHeight + !isResumePage * mobileHeaderHeight}px`,
                                `${mobileHeaderHeight}px`,
                            ]}
                            flex={1}
                        >
                            <PageTransition timeout={300} classNames="page-transition">
                                <Component {...pageProps} key={router.route} />
                            </PageTransition>
                            <style jsx global>{`
                                .page-transition-enter {
                                    opacity: 0;
                                    transform: translate3d(0, 20px, 0);
                                }
                                .page-transition-enter-active {
                                    opacity: 1;
                                    transform: translate3d(0, 0, 0);
                                    transition: opacity 300ms, transform 300ms;
                                }
                                .page-transition-exit {
                                    opacity: 1;
                                }
                                .page-transition-exit-active {
                                    opacity: 0;
                                    transition: opacity 300ms;
                                }
                            `}</style>
                            <Footer
                                height={`${footerHeight}px`}
                                mb={[!isResumePage && `${mobileHeaderHeight}px`, 0]}
                            />
                        </Flex>
                    </Flex>
                </ThemeProvider>
            </div>
        )
    }
}

export default MyApp
