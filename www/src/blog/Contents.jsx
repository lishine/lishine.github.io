// General packages
import React from 'react'
import Link from 'next/link'

// Common
import { UL, LI } from 'styles/ss-components'

// Local
import { frontMatter as one } from '../pages/blog/posts/haskell-install-tutorial.mdx'
// import { frontMatter as pages } from '../pages/blog/posts/*.mdx'

export const Contents = () => {
    const pages = [one]
    console.log('pages.length', pages.length)
    return (
        <UL>
            {pages.map(page => (
                <LI key={page.__resourcePath}>
                    <Link href={formatPath(page.__resourcePath)}>
                        <a>{page.title}</a>
                    </Link>
                </LI>
            ))}
        </UL>
    )
}

function formatPath(p) {
    return p.replace(/\.mdx$/, '')
}
