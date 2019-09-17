import React from 'react'
import Head from 'next/head'
import { withRouter, default as nextRouter } from 'next/router'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import camelCase from 'lodash/camelCase'

import { GlobalCss, theme } from 'styles/theme'
import { Header } from 'features/header/Header'
import { Footer } from 'features/footer/Footer'

import 'scss/index.scss'
import { Box, Flex } from 'styles/ss-components'

export const redirect = (ctx, path) => {
    if (process.browser) {
        nextRouter.push(path)
    } else {
        ctx.res.writeHead(301, { Location: path })
        ctx.res.end()
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
        const { Component, router } = this.props

        if (process.browser) {
            window.addEventListener('resize', () => {
                // We execute the same script as before
                let vh = window.innerHeight * 0.01
                document.documentElement.style.setProperty('--vh', `${vh}px`)
            })
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
                            content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
                        />
                    )}
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:300,400,500|Permanent+Marker"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Crimson+Pro:400,500,600,700&display=swap"
                        rel="stylesheet"
                    />
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
                            height="100vh"
                        >
                            <Component />
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

export default withRouter(MyApp)
