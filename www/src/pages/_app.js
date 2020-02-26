import React, { useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { PageTransition } from 'next-page-transitions'
import { useSwipeable, Swipeable } from 'react-swipeable'
import { MDXProvider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia as duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { GlobalCss, theme } from 'styles/theme'
import { Header } from 'features/header/Header'
import { Footer } from 'features/footer/Footer'
import { Flex } from 'styles/ss-components'

import 'scss/index.scss'
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
            <div>
                <Head>
                    <meta
                        charSet="utf-8"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                        name="viewport"
                    />
                    <style>{fonts}</style>
                </Head>
                <MDXProvider components={components}>
                    <ThemeProvider theme={theme}>
                        <GlobalCss />
                        <Swipeable
                            delta={250}
                            onSwiped={eventData => {
                                const { dir } = eventData
                                if (dir === 'Right') {
                                    if (
                                        router.pathname === '/' ||
                                        router.pathname === '/portfolio'
                                    ) {
                                        nextRouter.push('/contact')
                                    } else if (router.pathname === '/resume') {
                                        nextRouter.push('/portfolio')
                                    }
                                } else if (dir === 'Left') {
                                    if (
                                        router.pathname === '/' ||
                                        router.pathname === '/portfolio'
                                    ) {
                                        nextRouter.push('/resume')
                                    } else if (router.pathname === '/contact') {
                                        nextRouter.push('/portfolio')
                                    }
                                }
                                console.log('swiped', eventData.dir)
                            }}
                        >
                            <Flex flexDirection="column" className="page-container">
                                <Header mobileHeaderHeight={mobileHeaderHeight} />
                                <Flex
                                    flexDirection="column"
                                    pb={[
                                        `${footerHeight +
                                            !isResumePage * mobileHeaderHeight}px`,
                                        `${mobileHeaderHeight}px`,
                                    ]}
                                    flex={1}
                                >
                                    {router.route === '/resume' ? (
                                        <Component
                                            {...pageProps}
                                            router={router}
                                            key={router.route}
                                        />
                                    ) : (
                                        <PageTransition
                                            timeout={300}
                                            classNames="page-transition"
                                        >
                                            <Component
                                                {...pageProps}
                                                router={router}
                                                key={router.route}
                                            />
                                        </PageTransition>
                                    )}
                                    <style jsx global>
                                        {`
                                            .page-transition-enter {
                                                opacity: 0;
                                            }
                                            .page-transition-enter-active {
                                                opacity: 1;
                                                transition: opacity 300ms;
                                            }
                                            .page-transition-exit {
                                                opacity: 1;
                                            }
                                            .page-transition-exit-active {
                                                opacity: 0;
                                                transition: opacity 300ms;
                                            }
                                        `}
                                    </style>
                                    {!isResumePage && (
                                        <Footer
                                            height={`${footerHeight}px`}
                                            mb={[
                                                !isResumePage &&
                                                    `${mobileHeaderHeight}px`,
                                                0,
                                            ]}
                                        />
                                    )}
                                </Flex>
                            </Flex>
                        </Swipeable>
                    </ThemeProvider>
                </MDXProvider>
            </div>
        )
    }
}

export default MyApp
