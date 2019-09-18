import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, NavLink, Image } from 'styles/ss-components'
import { ProjectTitle, Gallery, SubLink } from './common'

const projectTitle = 'Overtok - users engagement and convertion'

export const Overtok = props => (
    <Box {...props}>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <SubLink>
            <NavLink mt={1} href="https://overtok.com">
                https://overtok.com
            </NavLink>
        </SubLink>
        <Flex mt={1} flexDirection={['column', null, 'row']}>
            <Box mie={4}>
                <H4>Working in a team</H4>
                <UL>
                    <LI>Javascript web client, which is embedded into client website</LI>
                    <LI>Clojurescript web admin panel (see picture)</LI>
                    <LI>Mobile client built with Clojuresript and React-Native</LI>
                    <LI>Serverless backend</LI>
                </UL>
                <H4 mt={2}>Technologies being used</H4>
                <UL>
                    <LI>Javascript</LI>
                    <LI>React</LI>
                    <LI>React-Native</LI>
                    <LI>State management: Redux, Parket, React-easy-state</LI>
                    <LI>Clojuscript + Reframe</LI>
                    <LI>AWS lambda, Serverless framework</LI>
                    <LI>Git, Jira, Slack</LI>
                </UL>
            </Box>
            <Box mt={4} width="100%" height="100%" maxWidth="600px">
                <Gallery
                    images={[
                        {
                            alt: `${projectTitle} - web React app, mobile React Native app, AWS Lambda backend, Clojurescript web admin client`,
                            url: `/img/overtok/1.jpg`,
                        },
                    ]}
                />
            </Box>
        </Flex>
    </Box>
)
