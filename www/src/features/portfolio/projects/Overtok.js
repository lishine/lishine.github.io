import React from 'react'
import { Box, Flex, NavLink } from 'styles/ss-components'
import {
    ProjectTitle,
    SubLink,
    DoesWrapper,
    DoesList,
    DoesTitle,
    DoesItem,
} from '../common'
import { Gallery } from '../Gallery'

const projectTitle = 'Overtok - users engagement and conversion'
const alt = `${projectTitle} - web React app, mobile React Native app, AWS Lambda backend, Clojurescript web admin client`

export const Overtok = props => (
    <Box {...props}>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <SubLink>
            <NavLink target="_blank" mt={1} href="https://overtok.com">
                https://overtok.com
            </NavLink>
        </SubLink>
        <Flex mt={1} flexDirection={['column', null, 'row']}>
            <DoesWrapper mie={4}>
                <DoesTitle>Working in a team</DoesTitle>
                <DoesList>
                    <DoesItem>
                        Javascript web client, which is embedded into client
                        website
                    </DoesItem>
                    <DoesItem>Clojurescript web admin panel (see picture)</DoesItem>
                    <DoesItem>
                        Mobile client built with Clojuresript and React-Native
                    </DoesItem>
                    <DoesItem>Serverless backend</DoesItem>
                </DoesList>
                <DoesTitle mt={2}>Technologies being used</DoesTitle>
                <DoesList>
                    <DoesItem>Javascript</DoesItem>
                    <DoesItem>React</DoesItem>
                    <DoesItem>React-Native</DoesItem>
                    <DoesItem>State management: Redux, Parket, React-easy-state</DoesItem>
                    <DoesItem>Clojuscript + Reframe</DoesItem>
                    <DoesItem>AWS lambda, Serverless framework</DoesItem>
                    <DoesItem>Git, Jira, Slack</DoesItem>
                </DoesList>
            </DoesWrapper>
            <Flex justifyContent="center">
                <Box mt={4} width="100%" height="100%" maxWidth="600px">
                    <Gallery
                        images={[
                            {
                                thumbnail: require('../images/overtok/1-t.jpg'),
                                thumbnailAlt: alt,
                                original: require('../images/overtok/1.jpg'),
                                originalAlt: alt,
                                imageSet: [
                                    {
                                        srcSet: require('../images/overtok/1.jpg?webp'),
                                        type: 'image/webp',
                                    },
                                    {
                                        src: require('../images/overtok/1.jpg'),
                                        type: 'image/jpg',
                                    },
                                ],
                            },
                        ]}
                    />
                </Box>
            </Flex>
        </Flex>
    </Box>
)
