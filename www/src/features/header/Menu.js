// General packages
import React from 'react'

// Common
import { P, Box, Flex, H3, Button, NavLink } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'
import { RouteLink } from 'common/RouteLink'

const activeLink = {
    textDecoration: 'none',
    borderBottom: '2px solid currentColor',
    color: '#496DAA',
}

export const Menu = props => {
    return (
        <Flex
            as="nav"
            display={['flex', 'grid']}
            className="padding-container"
            css={boxCss.css({
                letterSpacing: '0.07em',
                a: {
                    text: 'menu',
                    p: 1,
                    color: 'black',
                    borderBottom: '2px solid transparent',
                    cursor: 'pointer',
                    textAlign: 'center',
                    width: 'min-content',
                    wordSpacing: '100px',
                    pb: '4px',
                    ':hover': activeLink,
                    '&.active': activeLink,
                },
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
                    pb: '4px',
                    height: '56px',
                    bg: 'light-normal',
                    boxShadow: '0 4px 28px 4px rgba(0, 0, 0, .15)',
                    a: {
                        pl: '3px',
                        pr: '3px',
                        pb: '1px',
                        pt: '3px',
                    },
                },
            })}
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
