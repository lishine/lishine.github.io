import React, { useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import { default as nextRouter } from 'next/router'

import Portfolio from './portfolio'

const Page = () => (
    <div>
        <Head>
            <link rel="canonical" href="https://lishine.github.io/portfolio" />
            <meta
                name="google-site-verification"
                content="XtLYotgG271uweSX3eY0nJV-xwFU0Q3cS8Qot0XqDoc"
            />
        </Head>

        <Portfolio />
    </div>
)

// export default () => {
//     useEffect(() => {
//         nextRouter.push('/portfolio')
//         return null
//     }, [])
//     return null
// }

export default Page
