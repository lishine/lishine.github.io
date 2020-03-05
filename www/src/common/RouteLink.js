import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
