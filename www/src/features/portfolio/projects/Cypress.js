import React from 'react'
import { Box, LI, UL,NavLink } from 'styles/ss-components'
import { ProjectTitle, SubLink } from '../common'

export const Cypress = props => (
    <Box {...props}>
        <a id="site" />
        <ProjectTitle>Cypress end-to-end testing tips</ProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink
                target="_blank"
                href="https://github.com/lishine/cypress-practices"
            />
        </SubLink>
    </Box>
)
