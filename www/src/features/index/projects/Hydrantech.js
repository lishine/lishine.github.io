import React, { useRef, useState } from 'react'
import { Box, Flex, H1, H2, H4, LI, Grid, P, Span, NavLink } from 'styles/ss-components'
// import dynamic from 'next/dynamic'
// import LineTo from 'react-lineto'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { boxCss } from 'styles/ss-utils'
import { ProjectTitle, Gallery } from './common'

export const Hydrantech = () => (
    <Box>
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
                    <ProjectTitle>
                        System to to manage internet connected fire hydrants
                    </ProjectTitle>
                    <H4 mt="5px">Built from the ground up</H4>
                    <NavLink mt={1} href="https://app.hydrant-system.com">
                        https://app.hydrant-system.com
                    </NavLink>
                    <Grid
                        mt={1}
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
                    <P>Notifications with Web-Workers</P>
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
        <Flex mt={4} flexDirection={['column', 'row']}>
            <Box mie={[null, 2]} width={[null, '60%']}>
                <Gallery
                    showThumbnails
                    images={[1, 2, 3, 4, 5].map(index => `/img/hd/${index}.png`)}
                />
            </Box>
            <Box mt={[2, null]} width={[null, '40%']}>
                <Gallery
                    showThumbnails
                    images={[1, 2, 3, 4].map(index => `/img/hdm/${index}.jpg`)}
                />
            </Box>
        </Flex>
    </Box>
)
