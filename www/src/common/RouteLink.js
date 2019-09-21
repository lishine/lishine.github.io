import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

// Common
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'

export const RouteLink = ({ children, className, alternativeHref, ...props }) => {
    const router = useRouter()
    const active = router.pathname === props.href || router.pathname === alternativeHref

    if (active) {
        className = `${className || ''} active`
    }

    return (
        <Link {...props} shallow>
            <a className={className}>{children}</a>
        </Link>
    )
}
