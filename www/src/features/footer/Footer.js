import React, { useState, useEffect } from 'react'

import { Form, P, Box, Flex, Span, Image, NavLink, Grid } from 'styles/ss-components'

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
                        src={require('static/logo/github-onwhite.png')}
                        alt="github logo"
                        height={logoHeight}
                    />
                </a>
                <a href="https://gitlab.com/vim55k" rel="noopener" target="_blank">
                    <Image
                        src={require('static/logo/gitlab.png')}
                        alt="gitlab logo"
                        height={logoHeight}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/pvrv/"
                    rel="noopener"
                    target="_blank"
                >
                    <Image
                        src={require('static/logo/li-in.png')}
                        alt="linkedin logo"
                        height={logoHeight}
                    />
                </a>
            </Grid>
        </Flex>
    )
}
