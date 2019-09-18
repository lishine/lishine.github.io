import React from 'react'
import get from 'lodash/fp/get'

import { Form, P, Box, Flex, Span, Image, NavLink, Grid } from 'styles/ss-components'

import { RouteLink } from 'common/RouteLink'
import { boxCss } from 'styles/ss-utils'

export const Footer = props => {
    const logoHeight = '36px'
    return (
        <Flex
            bg="lightgrey"
            position="absolute"
            bottom={0}
            className="grid-container padding-container"
            maxWidth={[null, null, '100%']}
            {...props}
        >
            <Grid
                flex={1}
                alignContent="center"
                justifyContent="center"
                gridColumnGap={10}
                gridAutoFlow="column"
            >
                <a href="https://github.com/lishine" rel="noopener" target="_blank">
                    <Image
                        src="/logo/github-onwhite.png"
                        alt="github logo"
                        height={logoHeight}
                    />
                </a>
                <a href="https://gitlab.com/vim55k" rel="noopener" target="_blank">
                    <Image src="/logo/gitlab.png" alt="gitlab logo" height={logoHeight} />
                </a>
                <a
                    href="https://www.linkedin.com/in/pvrv/"
                    rel="noopener"
                    target="_blank"
                >
                    <Image
                        src="/logo/li-in.png"
                        alt="linkedin logo"
                        height={logoHeight}
                    />
                </a>
            </Grid>
        </Flex>
    )
}
