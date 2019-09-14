// General packages
import React from 'react'

// Common
import { P, Box, Flex, H3, Button, NavLink } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'
import { RouteLink } from 'common/RouteLink'

export const Menu = props => {
    return (
        <Flex
            as="dl"
            display={['flex', 'grid']}
            className=" padding-container"
            css={boxCss.css(styles)}
            {...props}
        >
            <RouteLink menu href="/contact">
                CONTACT
            </RouteLink>
            <RouteLink menu href="/">
                PORTFOLIO
            </RouteLink>
            <RouteLink menu href="/resume">
                RESUME
            </RouteLink>
        </Flex>
    )
}

const styles = {
    letterSpacing: '0.07em',
    [mediaUp('md')()]: {
        mt: 3,
        mb: 4,
        gridAutoFlow: 'column',
        gridColumnGap: 10,
        justifyContent: 'grid-start',
        maxWidth: '570px',
    },
    [mediaDown('md')()]: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: '100',
        height: '56px',
        bg: 'light-normal',
    },
}
