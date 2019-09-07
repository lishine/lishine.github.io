import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, NavLink, Image } from 'styles/ss-components'
import { ProjectTitle, Gallery } from './common'

export const Overtok = () => (
    <Box mt={4}>
        <ProjectTitle>Overtok - users engagement and convertion</ProjectTitle>
        <NavLink mt={1} href="https://overtok.com">
            https://overtok.com
        </NavLink>
        <Flex mt={4} flexDirection={['column', null, 'row']}>
            <Box mie={4}>
                <H4 mt={1}>Working in a team</H4>
                <UL mt={1}>
                    <LI>Javascript web client, which is embedded into client website</LI>
                    <LI>Clojurescript web admin panel (see picture)</LI>
                    <LI>Mobile client built with Clojuresript and React-Native</LI>
                    <LI>Serverless backend</LI>
                </UL>
                <H4 mt={1}>Technologies being used</H4>
                <UL mt={1}>
                    <LI>Javascript</LI>
                    <LI>React</LI>
                    <LI>React-Native</LI>
                    <LI>State management: Redux, Parket, React-easy-state</LI>
                    <LI>Clojuscript + Reframe</LI>
                    <LI>AWS lambda, Serverless framework</LI>
                    <LI>Git, Jira, Slack</LI>
                </UL>
            </Box>
            <Box mt={3} width="100%" height="100%" maxWidth="600px">
                <Gallery images={['/img/overtok/1.png']} />
            </Box>
            {/* <Image
                        css={imageFrameStyles}
                        mt={3}
                        width="100%"
                        height="100%"
                        maxWidth="600px"
                        src="/img/overtok/1.png"
                    /> */}
        </Flex>
    </Box>
)
