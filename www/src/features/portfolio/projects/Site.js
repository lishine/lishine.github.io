import React, { useRef, useState } from 'react'
import { Box, LI, UL, H3, Grid, P, Span, NavLink, Flex } from 'styles/ss-components'
import { ProjectTitle, SubLink } from '../common'

export const Site = props => (
    <Box {...props}>
        <ProjectTitle>This Site</ProjectTitle>
        <SubLink flexDirection={['column', 'row']} overflow="hidden">
            <Span mie="1em">Source:</Span>
            <NavLink href="https://github.com/lishine/lishine.github.io" />
        </SubLink>
        <UL mt={1}>
            <LI>Static Next.js + React</LI>
            <LI>Deployed to github-pages</LI>
            <LI>SCSS, Emotion, Styled-System </LI>
            <LI>Clean design :)</LI>
            <LI>Responsive & adaptive</LI>
            <LI>SEO optimized</LI>
            <LI>Latest CSS solutions: Flex, Grid, custom and logical CSS properties</LI>
            <LI>Lighthouse audit ~100</LI>
            <LI>Page Animation</LI>
        </UL>
    </Box>
)
