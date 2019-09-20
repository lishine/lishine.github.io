import React from 'react'
import Head from 'next/head'
import { Portfolio } from 'features/portfolio/Portfolio'

export default () => (
    <div>
        <Head>
            <link rel="canonical" href="https://lishine.github.io" />
            <title>Pavel Ravits - React Web Developer - Portfolio</title>
            <meta name="description" content="Portfolio" />
        </Head>

        <Portfolio />
    </div>
)
