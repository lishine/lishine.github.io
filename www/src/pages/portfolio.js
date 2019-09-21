import React from 'react'
import Head from 'next/head'
import { Portfolio } from 'features/portfolio/Portfolio'
import { fonts } from 'features/fonts'

export default () => (
    <div>
        <Head>
            <title>Pavel Ravits - React Web Developer - Portfolio</title>
            <meta name="description" content="Portfolio" />
        </Head>

        <Portfolio />
    </div>
)
