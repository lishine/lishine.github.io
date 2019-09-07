import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Common
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'

const getMenuStyle = active => {
    const activeMenu = {
        textDecoration: 'none',
        borderBottom: '2px solid currentColor',
        color: 'primary',
    }
    const menu = {
        text: 'menu',
        p: 1,
        color: 'light-normal',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        textAlign: 'center',
        width: 'min-content',
        wordSpacing: '100px',
        pb: '4px',
        [mediaDown('md')()]: {
            pl: '3px',
            pr: '3px',
            pb: '1px',
            pt: '3px',
            color: 'dark-normal',
        },
    }

    if (active) {
        Object.assign(menu, activeMenu)
        menu[':hover'] = activeMenu
    }
    return menu
}

export const RouteLink = ({ children, className, menu, ...props }) => {
    const router = useRouter()

    const active = router.pathname === props.href

    const css = menu ? getMenuStyle(active) : {}

    return (
        <Link {...props} shallow>
            <a className={className} css={boxCss.css(css)}>
                {children}
            </a>
        </Link>
    )
}
