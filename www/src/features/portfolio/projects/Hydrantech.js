import React, { useRef, useState } from 'react'
import { Box, Flex, H1, H2, H4, LI, Grid, P, Span, NavLink } from 'styles/ss-components'
// import dynamic from 'next/dynamic'
// import LineTo from 'react-lineto'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { boxCss } from 'styles/ss-utils'
import { ProjectTitle, SubRemark, SubLink } from '../common'
import { Gallery } from '../Gallery'

const projectTitle = 'System to manage internet-connected fire hydrants'
const altDesktop = `${projectTitle} - web React app`
const altMobile = `${projectTitle} - mobile React Native app`

export const Hydrantech = props => (
    <Box {...props}>
        <ArcherContainer strokeColor="red">
            <ArcherElement
                id="A"
                relations={[
                    {
                        targetId: 'B',
                        sourceAnchor: 'bottom',
                        targetAnchor: 'top',
                    },
                    {
                        targetId: 'C',
                        sourceAnchor: 'bottom',
                        targetAnchor: 'top',
                    },
                    {
                        targetId: 'D',
                        sourceAnchor: 'bottom',
                        targetAnchor: 'top',
                    },
                ]}
            >
                <Flex mt={4} pb={1} flexDirection="column">
                    <ProjectTitle>{projectTitle}</ProjectTitle>
                    <SubRemark>Built from the ground up</SubRemark>
                    <SubLink>
                        <NavLink href="https://app.hydrant-system.com">
                            https://app.hydrant-system.com
                        </NavLink>
                    </SubLink>
                    <Grid
                        mt={3}
                        justifyContent="space-around"
                        gridAutoColumns="1fx"
                        gridAutoFlow="column"
                        css={boxCss.css({
                            Span: { mx: 1, lineHeight: '19px' },
                        })}
                    >
                        <Span>Show Events</Span>
                        <Span>Manage hydrants</Span>
                        <Span>Manage users</Span>
                    </Grid>
                </Flex>
            </ArcherElement>

            <Grid
                textAlign="center"
                mt={10}
                gridAutoColumns="1fx"
                gridAutoFlow="column"
                css={boxCss.css({
                    P: { mx: 1, mb: 1, lineHeight: '19px' },
                })}
            >
                <ArcherElement id="B">
                    <H4>Server</H4>
                    <P>Built with Meteor</P>
                    <P>MongoDB</P>
                </ArcherElement>
                <ArcherElement id="C">
                    <H4>Client</H4>
                    <P>Built with React + React-router</P>
                    <P>Notifications with Service-Workers</P>
                    <P>Show hydrants on a map</P>
                </ArcherElement>
                <ArcherElement id="D">
                    <H4>Mobile</H4>
                    <P>Built with React-Native and MobX</P>
                    <P>Converted to Typescript</P>
                    <P>Notifications</P>
                    <P>Geolocation</P>
                    <P>Barcode Scanning</P>
                </ArcherElement>
            </Grid>
        </ArcherContainer>
        <Flex mt={4} flexDirection={['column', 'row']} justifyContent="space-between">
            <Box mb={[8, null]} mie={[null, 2]} width={[null, '55%']}>
                <Gallery
                    showThumbnails
                    images={[
                        {
                            thumbnail: require('../images/hd/1-t.jpg'),
                            thumbnailAlt: altDesktop,
                            original: require('../images/hd/1.jpg'),
                            originalAlt: altDesktop,
                            imageSet: [
                                {
                                    srcSet: require('../images/hd/1.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hd/1.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hd/2-t.jpg'),
                            thumbnailAlt: altDesktop,
                            original: require('../images/hd/2.jpg'),
                            originalAlt: altDesktop,
                            imageSet: [
                                {
                                    srcSet: require('../images/hd/2.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hd/2.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hd/3-t.jpg'),
                            thumbnailAlt: altDesktop,
                            original: require('../images/hd/3.jpg'),
                            originalAlt: altDesktop,
                            imageSet: [
                                {
                                    srcSet: require('../images/hd/3.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hd/3.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hd/4-t.jpg'),
                            thumbnailAlt: altDesktop,
                            original: require('../images/hd/4.jpg'),
                            originalAlt: altDesktop,
                            imageSet: [
                                {
                                    srcSet: require('../images/hd/4.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hd/4.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hd/5-t.jpg'),
                            thumbnailAlt: altDesktop,
                            original: require('../images/hd/5.jpg'),
                            originalAlt: altDesktop,
                            imageSet: [
                                {
                                    srcSet: require('../images/hd/5.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hd/5.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                    ]}
                />{' '}
            </Box>
            <Box
                pt={[8, 0]}
                borderTop={['4px solid var(--onwhite-border)', '0']}
                width={[null, '35%']}
            >
                <Gallery
                    showThumbnails
                    images={[
                        {
                            thumbnail: require('../images/hdm/1-t.jpg'),
                            thumbnailAlt: altMobile,
                            original: require('../images/hdm/1.jpg'),
                            originalAlt: altMobile,
                            imageSet: [
                                {
                                    srcSet: require('../images/hdm/1.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hdm/1.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hdm/2-t.jpg'),
                            thumbnailAlt: altMobile,
                            original: require('../images/hdm/2.jpg'),
                            originalAlt: altMobile,
                            imageSet: [
                                {
                                    srcSet: require('../images/hdm/2.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hdm/2.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hdm/3-t.jpg'),
                            thumbnailAlt: altMobile,
                            original: require('../images/hdm/3.jpg'),
                            originalAlt: altMobile,
                            imageSet: [
                                {
                                    srcSet: require('../images/hdm/3.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hdm/3.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                        {
                            thumbnail: require('../images/hdm/4-t.jpg'),
                            thumbnailAlt: altMobile,
                            original: require('../images/hdm/4.jpg'),
                            originalAlt: altMobile,
                            imageSet: [
                                {
                                    srcSet: require('../images/hdm/4.jpg?webp'),
                                    type: 'image/webp',
                                },
                                {
                                    src: require('../images/hdm/4.jpg'),
                                    type: 'image/jpg',
                                },
                            ],
                        },
                    ]}
                />{' '}
            </Box>
        </Flex>
    </Box>
)
