import React from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { PageTransition } from 'next-page-transitions'

import { GlobalCss, theme } from 'styles/theme'
import { Header } from 'features/header/Header'
import { Footer } from 'features/footer/Footer'

import 'scss/index.scss'
import { Flex } from 'styles/ss-components'

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
                        href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Oswald:300,400,500|Crimson+Pro:400,500,600,700&display=swap"
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
