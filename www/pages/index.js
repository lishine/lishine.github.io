import React from 'react'
import {
    Box,
    Flex,
    H1,
    H2,
    H4,
    LI,
    UL,
    H3,
    Grid,
    P,
    Span,
    NavLink,
} from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { boxCss } from 'styles/ss-utils'

const _Gallery = ({ images, className }) => (
    <ImageGallery
        additionalClass={className}
        // showFullscreenButton={false}
        showPlayButton={false}
        showBullets={false}
        showNav={false}
        // showThumbnails={false}
        items={images.map(url => ({
            original: url,
            thumbnail: url,
        }))}
    />
)
const Gallery = props => (
    <_Gallery {...props} css={boxCss.css({ bg: 'lightgrey', p: 1 })} />
)

// const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })

const ProjectTitle = props => <H3 borderBottom="1px solid currentColor" {...props} />

const PageTitle = props => <H1 borderBottom="1px solid currentColor" {...props} />

const Page = () => (
    <Box mb={8} className="grid-container padding-container">
        <PageTitle mb={1}>
            <strong>Portfolio</strong>
        </PageTitle>
        <H4>
            Projects I have done and technologies I have used during my web development
            career
        </H4>
        <UL mt={1}>
            <LI>In a chronological order, from most recent to the first one</LI>
            <LI>
                Most of the recent and the best writen code is in private repositories
                that will be demonstrated upon request
            </LI>
        </UL>

        <Box mt={4}>
            <ProjectTitle>Manage barcodes for users</ProjectTitle>
            <NavLink mt={1} href="https://github.com/lishine/login-full-stack">
                Login Full Stack project
            </NavLink>
            <H4 mt={1}>Features</H4>
            <UL mt={1}>
                <LI>JWT authentication with emails</LI>
                <LI>Forms</LI>
                <LI>User profile</LI>
            </UL>
            <H4 mt={1}>Technologies being used</H4>
            <UL mt={1}>
                <LI>Webpack 4</LI>
                <LI>React</LI>
                <LI>Router - redux-saga-first-router</LI>
                <LI>Client state management - Redux</LI>
                <LI>Redux middleware - Redux-Saga</LI>
                <LI>Client state management - React-easy-state</LI>
                <LI>CSS in Js - Styled components</LI>
                <LI>Server - Express</LI>
                <LI>DB - PostgreSQL</LI>
                <LI>DB Object interface - Massive</LI>
            </UL>
        </Box>

        <Flex mt={4}>
            <Box flexGrow={0} flexBasis={0}>
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
                        <Flex pb={1} flexDirection="column">
                            <ProjectTitle>
                                System to to manage internet connected fire hydrants
                            </ProjectTitle>
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
                        mt={7}
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
            </Box>
        </Flex>

        <Flex mt={4} flexDirection={['column', 'row']} maxWidth="800px">
            <Box mie={[null, 2]} width={[null, '60%']}>
                <Gallery images={[1, 2, 3, 4, 5].map(index => `/img/hd/${index}.png`)} />
            </Box>
            <Box mt={[2, null]} width={[null, '40%']}>
                <Gallery images={[1, 2, 3, 4].map(index => `/img/hdm/${index}.jpg`)} />
            </Box>
        </Flex>

        <Box mt={4}>
            <ProjectTitle>My first React project</ProjectTitle>
            <P mt={1}>
                While I was working as an Electronics Engineer, I was assigned to develop
                a Laboratory experiments management software.
            </P>
            <UL mt={2}>
                <LI>
                    Instead of building the usual desktop solution using Delphi/Vb/C#, I
                    turned to develop distributed system which will be available through a
                    client anywhere
                </LI>
                <LI>
                    Meteor enabled me to get started easily and build Full-Stack solution
                </LI>
                <LI>
                    React made me excited to write a client structured with components
                </LI>
                <LI>React is the main reason I started web-coding.</LI>
                <LI>
                    I was able to take advantage of community built components, this
                    opportunity was the main reason to ditch the desktop way of
                    development
                </LI>
            </UL>
        </Box>
    </Box>
)

export default Page
