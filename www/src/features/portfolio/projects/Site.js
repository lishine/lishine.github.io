import React from 'react'
import { Box, LI, UL, NavLink } from 'styles/ss-components'
import { ProjectTitle, SubLink, SubProjectTitle } from '../common'

export const Site = props => (
    <Box {...props}>
        <ProjectTitle>Open source</ProjectTitle>

        <SubProjectTitle>Life game</SubProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink target="_blank" href="https://github.com/lishine/life-game" />
        </SubLink>
        <SubLink>
            Codesandbox:&nbsp;
            <NavLink
                target="_blank"
                href="https://codesandbox.io/s/github/lishine/life-game/tree/master"
            />
        </SubLink>

        <SubProjectTitle>Unsplash search</SubProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink target="_blank" href="https://github.com/lishine/unsplash-search" />
        </SubLink>
        <SubLink>
            Codesandbox:&nbsp;
            <NavLink
                target="_blank"
                href="https://codesandbox.io/s/github/lishine/unsplash-search/tree/dev"
            />
        </SubLink>

        <SubProjectTitle>This site</SubProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink
                target="_blank"
                href="https://github.com/lishine/lishine.github.io"
            />
        </SubLink>
        <UL>
            <LI>Static Next.js + React</LI>
            <LI>Deployed to Github-pages</LI>
            <LI>SCSS, Emotion, Styled-System </LI>
            <LI>MDX blog template</LI>
            <LI>Responsive & adaptive</LI>
            <LI>SEO optimized</LI>
            <LI>Latest CSS solutions: Flex, Grid, custom and logical CSS properties</LI>
            <LI>Lighthouse audit ~100</LI>
            <LI>Page transitions</LI>
        </UL>

        <SubProjectTitle>Mobx React hooks form</SubProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink target="_blank" href="https://github.com/lishine/mobx-hooks-form" />
        </SubLink>
        <UL>
            <LI>Typescript</LI>
            <LI>Mobx</LI>
            <LI>React context</LI>
            <LI>React hooks</LI>
        </UL>

        <SubProjectTitle>Cypress end-to-end testing tips</SubProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink
                target="_blank"
                href="https://github.com/lishine/cypress-practices"
            />
        </SubLink>
    </Box>
)
