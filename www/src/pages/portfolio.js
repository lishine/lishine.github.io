import React from 'react'
import Head from 'next/head'
import { Portfolio } from 'features/portfolio/Portfolio'

export default () => (
    <>
        <Head>
            <link rel="canonical" href="https://lishine.github.io" />
            <title>Pavel Ravits - React Web Developer - Portfolio</title>
            <meta
                name="description"
                content="Pavel Ravits - React Web Developer - Portfolio"
            />
        </Head>

        <Portfolio />
    </>
)
