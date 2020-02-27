import React from 'react'
import { Box, LI, UL,NavLink } from 'styles/ss-components'
import { ProjectTitle, SubLink } from '../common'

export const Site = props => (
    <Box {...props}>
        <a id="site" />
        <ProjectTitle>This Site</ProjectTitle>
        <SubLink>
            Source:&nbsp;
            <NavLink
                target="_blank"
                href="https://github.com/lishine/lishine.github.io"
            />
        </SubLink>
        <UL mt={1}>
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
    </Box>
)
