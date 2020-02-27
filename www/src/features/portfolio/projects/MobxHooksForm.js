import React from 'react'
import { Box, LI, UL,NavLink } from 'styles/ss-components'
import { ProjectTitle, SubLink } from '../common'

export const MobxHooksForm = props => (
    <Box {...props}>
        <a id="site" />
        <ProjectTitle>Mobx React hooks form</ProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink
                target="_blank"
                href="https://github.com/lishine/mobx-hooks-form"
            />
        </SubLink>
        <UL mt={1}>
            <LI>Typescript</LI>
            <LI>Mobx</LI>
            <LI>React context</LI>
            <LI>React hooks</LI>
        </UL>
    </Box>
)
