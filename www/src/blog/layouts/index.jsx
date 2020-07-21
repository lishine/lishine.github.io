// General packages
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

// Common
import { Flex, H1, Box } from 'styles/ss-components'

export default function Layout(frontMatter) {
    return ({ children: content, router }) => {
        return (
            <>
                <Head>
                    <title>{frontMatter.title}</title>
                    <meta name="description" content="Blog" />
                </Head>

                <Flex
                    flexDirection="column"
                    alignItems={['flex-start']}
                    mt={5}
                    pl={5}
                    className="grid-container padding-container"
                >
                    {router.pathname !== '/blog' && (
                        <Link href="/blog">&#8592; contents</Link>
                    )}
                    <H1 mb={2}>{frontMatter.title}</H1>
                    <Box
                        css={boxCss.css({
                            '*': { fontFamily: 'Lato' },
                            h4: { fontSize: '20px' },
                        })}
                    >
                        {content}
                    </Box>
                </Flex>
            </>
        )
    }
}
