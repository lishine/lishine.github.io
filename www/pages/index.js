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
    Image,
    DT,
} from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'
import styled from '@emotion/styled'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { boxCss } from 'styles/ss-utils'

const imageFrameStyles = boxCss.css({ bg: 'lightgrey', p: 1 })

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
const Gallery = props => <_Gallery {...props} css={imageFrameStyles} />

// const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })

const ProjectTitle = props => <H3 borderBottom="1px solid currentColor" {...props} />

const PageTitle = props => <H1 borderBottom="1px solid currentColor" {...props} />
const SubRemark = props => <H4 color="var(--onwhite-menu)" {...props} />

// const Feature = styled(Box)(
//     boxCss.css({ border: '1px solid var(--onwhite-border)', p: 1 })
// )

const Page = () => (
    <Box mb={8} className="grid-container padding-container">
        <Box maxWidth="1024px">
            <PageTitle mb={1}>
                <strong>Portfolio</strong>
            </PageTitle>
            <H4>
                Projects I have done and technologies I have used during my web
                development career
            </H4>
            <UL mt={1}>
                <LI>In a chronological order, from most recent to the first one</LI>
                <LI>
                    Most of the recent and the best writen code is in private repositories
                    that will be demonstrated upon request
                </LI>
            </UL>

            {/** ***************************************************************/}
            {/** ******************** STREET BUILDING SIGN *********************/}
            {/** ***************************************************************/}

            {/** ***************************************************************/}
            {/** *************************** SALSA *****************************/}
            {/** ***************************************************************/}

            <Box>
                <ProjectTitle mt={4}>Sale video courses of Salsa dancing</ProjectTitle>
                <Flex
                    alignItems={['flex-start', null, 'center']}
                    flexDirection={['column', null, 'row']}
                >
                    <Box mie={5}>
                        <SubRemark>Built from the ground up</SubRemark>
                        <Flex mt={1} alignItems="center">
                            Have a look please:
                            <NavLink mis={1} href="https://do-salsa.tk">
                                https://do-salsa.tk
                            </NavLink>
                        </Flex>
                    </Box>
                    <Grid
                        w={1}
                        maxWidth={['600px']}
                        flex={1}
                        mie={5}
                        mt={2}
                        justifyContent="space-between"
                        // gridAutoColumns="1fx"
                        gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))"
                        // gridAutoFlow="column"
                        gridGap={2}
                        css={boxCss.css({
                            [Span]: {
                                textAlign: 'center',
                                border: '1px solid var(--onwhite-border)',
                                p: '5px',
                                lineHeight: '19px',
                            },
                            [Box]: {
                                textAlign: 'center',
                            },
                        })}
                    >
                        <Box>
                            <Span> Landing page </Span>
                        </Box>
                        <Box>
                            <Span> Blog</Span>
                        </Box>
                        <Box>
                            <Span> Buy course</Span>
                        </Box>
                        <Box>
                            <Span> Learn course</Span>
                        </Box>
                        <Box>
                            <Span> Manage content</Span>
                        </Box>
                    </Grid>
                </Flex>

                <Flex
                    textAlign="center"
                    flexDirection="column"
                    flexWrap="wrap"
                    maxHeight={['1000px', '330px', '330px', '300px']}
                    // gridAutoColumns="1fx"
                    // gridAutoFlow="column"
                    // gridColumnGap={4}
                    // gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                    css={boxCss.css({
                        [H4]: { textAlign: 'start' },
                        [UL]: { mis: ['1em', '-1em', '-1em', '-1em'], mt: 1 },
                        [LI]: { textAlign: 'start', mb: 1, lineHeight: '19px' },
                        [Box]: {
                            maxWidth: ['250px', '200px', '200px', '200px'],
                            mt: 2,
                            mr: 4,
                        },
                    })}
                >
                    <Box>
                        <H4>API</H4>
                        <UL>
                            <LI>
                                Serverless services, deployed to Zeit Now v2 on top of AWS
                                lambda
                            </LI>
                            <LI>JWT in cookie authentication</LI>
                            <LI>Email service with MailGun API, MJML templates</LI>
                        </UL>
                    </Box>

                    <Box>
                        <H4>Emails generator</H4>
                        <UL>
                            <LI>React rendering</LI>
                            <LI>MJML markup</LI>
                            <LI>DOT templates</LI>
                        </UL>
                    </Box>

                    <Box>
                        <H4>Content managment</H4>
                        <UL>
                            <LI>DATO Headless CMS</LI>
                            <LI>GraphQL API</LI>
                        </UL>
                    </Box>

                    <Box>
                        <H4>DB</H4>
                        <UL>
                            <LI>Hasura GraphQL engine</LI>
                            <LI>Docker on Heroku</LI>
                            <LI>Migrations</LI>
                            <LI>Permissions</LI>
                            <LI>Postgress</LI>
                        </UL>
                    </Box>

                    <Box>
                        <H4>Client</H4>
                        <UL>
                            <LI>Next.js SSR dynamic deploy</LI>
                            <LI>SEO optimized</LI>
                            <LI>
                                CSS: SCSS, imported Bootstrap, Emotion, Styled-System{' '}
                            </LI>
                            <LI>
                                React state management: Easy-Peasy (Redux + React-hooks)
                            </LI>
                            <LI>PayPal API</LI>
                            <LI>
                                Design implemented according to design requirements given
                                in Invision
                            </LI>
                        </UL>
                    </Box>
                </Flex>

                <Image
                    css={imageFrameStyles}
                    mt={4}
                    width="100%"
                    maxWidth="600px"
                    src="/img/salsa/1.png"
                />
            </Box>

            {/** ***************************************************************/}
            {/** ************************* OVERTOK *****************************/}
            {/** ***************************************************************/}

            <Box mt={4}>
                <ProjectTitle>Overtok - users engagement and convertion</ProjectTitle>
                <NavLink mt={1} href="https://overtok.com">
                    https://overtok.com
                </NavLink>
                <Flex mt={4} flexDirection={['column', null, 'row']}>
                    <Box mie={4}>
                        <H4 mt={1}>Working in a team</H4>
                        <UL mt={1}>
                            <LI>
                                Javascript web client, which is embedded into client
                                website
                            </LI>
                            <LI>Clojurescript web admin panel (see picture)</LI>
                            <LI>
                                Mobile client built with Clojuresript and React-Native
                            </LI>
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
                    <Image
                        css={imageFrameStyles}
                        mt={3}
                        width="100%"
                        height="100%"
                        maxWidth="600px"
                        src="/img/overtok/1.png"
                    />
                </Flex>
            </Box>

            {/** ***************************************************************/}
            {/** ************************ BARCODES *****************************/}
            {/** ***************************************************************/}

            <Box mt={4}>
                <ProjectTitle>Manage barcodes for users</ProjectTitle>
                <H4 mt="5px">Built from the ground up</H4>
                <NavLink mt={1} href="https://github.com/lishine/login-full-stack">
                    Source - https://github.com/lishine/login-full-stack
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

            {/** ***************************************************************/}
            {/** ********************** HYDRANTECH *****************************/}
            {/** ***************************************************************/}

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
                        images={[1, 2, 3, 4, 5].map(index => `/img/hd/${index}.png`)}
                    />
                </Box>
                <Box mt={[2, null]} width={[null, '40%']}>
                    <Gallery
                        images={[1, 2, 3, 4].map(index => `/img/hdm/${index}.jpg`)}
                    />
                </Box>
            </Flex>
            <Box mt={4}>
                <ProjectTitle>My first React project</ProjectTitle>
                <P mt={1}>
                    While I was working as an Electronics Engineer, I was assigned to
                    develop a Laboratory experiments management software.
                </P>
                <UL mt={2}>
                    <LI>
                        Instead of building the usual desktop solution using Delphi/Vb/C#,
                        I turned to develop distributed system which will be available
                        through a client anywhere
                    </LI>
                    <LI>
                        Meteor enabled me to get started easily and build Full-Stack
                        solution
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
    </Box>
)

export default Page
