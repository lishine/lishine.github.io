import React from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'
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
        const { Component } = this.props

        if (process.browser) {
            console.log('$ BROWSER in render _app')
        } else {
            console.log('$ SERVER in render _app')
        }

        // let title, description
        // const route = camelCase(store.getState().router.route)
        // if (route) {
        //     const pageStore = store.getState()[route]
        //     if (pageStore) {
        //         ;({ title, seoDescription: description } = pageStore.data | {})
        //     }
        // }
        // title = title || store.getState().common.data.general.title
        // description = description || store.getState().common.data.general.description
        // const { titleSuffix } = store.getState().common.data.general
        // const { favicon } = store.getState().common.data.general
        // title = title.toUpperCase()

        return (
            <div>
                <Head>
                    {/* <title>{`${title} ${titleSuffix}`}</title> */}
                    {/* <meta name="description" content={description} /> */}
                    <meta
                        charSet="utf-8"
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:300,400,500|Permanent+Marker"
                        rel="stylesheet"
                    />
                    {/* <link rel="icon" type="image/x-icon" href={favicon.url} /> */}
                </Head>

                <ThemeProvider theme={theme}>
                    <GlobalCss />
                    <Flex flexDirection="column" className="page-container">
                        <Header />
                        <Flex flexDirection="column" pb="218px" flex={1}>
                            <Component />
                            <Footer />
                        </Flex>
                    </Flex>
                </ThemeProvider>
            </div>
        )
    }
}

export default MyApp
