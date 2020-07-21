import React, { useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'
import App from 'next/app'
import { ThemeProvider, CSSReset, ColorModeProvider, useColorMode } from '@chakra-ui/core'
import { Global, css } from '@emotion/core'
import { PageTransition } from 'next-page-transitions'
import { useSwipeable, Swipeable } from 'react-swipeable'
import { MDXProvider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia as duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { theme } from 'styles/theme'
import { Header } from 'features/header/Header'
import { Footer } from 'features/footer/Footer'
import { Flex } from 'styles/ss-components'

// import 'scss/index.scss'
import { fonts } from 'features/fonts'

export const redirect = (ctx, path) => {
    if (process.browser) {
        nextRouter.push(path)
    } else {
        ctx.res.writeHead(301, { Location: path })
        ctx.res.end()
    }
}

export let globalCtx
// ;({ children }) => {
//     return (
//         <Highlight {...defaultProps} code={children} language="javascript">
//             {({ className, style, tokens, getLineProps, getTokenProps }) => (
//                 <pre className={className} style={{ ...style, padding: '20px' }}>
//                     {tokens.map((line, i) => (
//                         <div key={i} {...getLineProps({ line, key: i })}>
//                             {line.map((token, key) => (
//                                 <span key={key} {...getTokenProps({ token, key })} />
//                             ))}
//                         </div>
//                     ))}
//                 </pre>
//             )}
//         </Highlight>
//     )
// }

const CodeBlock = ({ children, className }) => {
    const language = className?.replace(/language-/, '')
    return (
        <SyntaxHighlighter language={language} style={duotoneDark}>
            {children}
        </SyntaxHighlighter>
    )
}

const components = {
    pre: props => <div {...props} />,
    code: CodeBlock,
    // props => <pre style={{ color: 'tomato' }} {...props} />,
}

const GlobalStyle = ({ children }) => {
    return (
        <>
            <CSSReset />
            <Global
                styles={css`
                    ::selection {
                        background-color: #47a3f3;
                        color: #fefefe;
                    }
                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                    }
                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: 'white';
                    }
                `}
            />
            {children}
        </>
    )
}

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
        console.log('typeof <Footer />', typeof (<Footer />))
        const { Component, pageProps, router } = this.props
        if (process.browser) {
            console.log('router', router)
            console.log('router.pathname', router.pathname)
            console.log('$ BROWSER in render _app')
        } else {
            console.log('$ SERVER in render _app')
        }
        const isResumePage = router.pathname === '/resume'
        const footerHeight = 66
        const mobileHeaderHeight = 56
        return (
            <ThemeProvider theme={theme}>
                <MDXProvider components={components}>
                    <GlobalStyle>
                        <Component {...pageProps} router={router} key={router.route} />
                    </GlobalStyle>
                </MDXProvider>
            </ThemeProvider>
        )
    }
}

export default MyApp
