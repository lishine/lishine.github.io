import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

// Common
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'

const getMenuStyle = active => {
    const activeMenu = {
        textDecoration: 'none',
        borderBottom: '2px solid currentColor',
        color: '#496DAA',
    }
    const menu = {
        text: 'menu',
        p: 1,
        color: 'black',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        textAlign: 'center',
        width: 'min-content',
        wordSpacing: '100px',
        pb: '4px',
        ':hover': activeMenu,
        [mediaDown('md')()]: {
            pl: '3px',
            pr: '3px',
            pb: '1px',
            pt: '3px',
            color: 'dark-normal',
        },
    }

    if (active) {
        Object.assign(menu, activeMenu, { ':hover': activeMenu })
    }
    return menu
}

export const RouteLink = ({ children, className, menu, ...props }) => {
    const router = useRouter()
    const active = router.pathname === props.href
    const styles = boxCss.css(menu ? getMenuStyle(active) : {})

    return (
        <Link passHref {...props} shallow>
            <a className={className || ''} css={styles}>
                {children}
            </a>
        </Link>
    )
}
