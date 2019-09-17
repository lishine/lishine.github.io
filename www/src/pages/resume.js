import React, { useRef, useState } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import ReactToPrint from 'react-to-print'

import {
    LI as _LI,
    UL as _UL,
    Box,
    Flex,
    H1,
    H4,
    Grid,
    P,
    NavLink,
    Span,
    DD,
    DT,
} from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'

import { Email, Web, Phone, Israel } from 'svg/icons/index'

const LI = props => (
    <_LI
        {...{
            dot: (
                <Span
                    display="inline-block"
                    transform="translateY(-1px)"
                    fontWeight="600"
                >
                    ·
                </Span>
            ),
            ...props,
        }}
    />
)
const UL = styled(_UL)(boxCss.css({ mis: 0 }))

const Page = () => {
    const ref = useRef(null)
    return (
        <>
            <Head>
                <title>Pavel Ravits - React Web Developer - Resume</title>
                <meta
                    name="description"
                    content="Pavel Ravits - React Web Developer - Resume"
                />
            </Head>

            <Box pb={15} className="grid-container" position="relative">
                <ReactToPrint
                    trigger={() => (
                        <Box position="absolute" top={4} right={9}>
                            <button className="btn" bg="white">
                                PRINT
                            </button>
                        </Box>
                    )}
                    content={() => ref.current}
                />
                <Flex
                    ref={ref}
                    flexDirection="column"
                    pt={8}
                    px={9}
                    width="1024px"
                    height="1350px"
                    color="black"
                    css={boxCss.css({
                        'h1, h4, p, li, a, span, dt, dd': {
                            fontFamily: 'Crimson Pro, serif',
                        },
                        h1: {
                            fontSize: '38px',
                            transform: 'translateY(7px)',
                            letterSpacing: '0.03em',
                        },
                        [H4]: {
                            fontSize: '24px',
                            letterSpacing: '0.03em',
                        },
                        'p, li, a, [Span], dt, dd': {
                            fontSize: '19px',
                            lineHeight: '24px',
                            '> strong': {
                                color: '#333333',
                            },
                        },
                        'p, ol, ul, dl': { transform: 'translateY(5px)' },
                        'p, ul': { mb: 3 },
                        '.sectionHeader': {
                            fontWeight: 600,
                            mb: 1,
                        },
                        '--link': '#6387C5',
                    })}
                >
                    <H1 mb={1}>
                        <strong>Pavel Ravits</strong>
                    </H1>
                    <H4 mt="-5px" fontWeight="500">
                        React developer
                    </H4>

                    <H1 mt={3} mb={4} color="link">
                        ...seeking <strong>collaboration</strong> with{' '}
                        <strong>passionate</strong> developers
                    </H1>
                    <Grid
                        flex={1}
                        gridAutoFlow="column"
                        gridTemplateColumns="55fr 45fr"
                        gridColumnGap={8}
                    >
                        <Box>
                            <H4 className="sectionHeader">Background</H4>
                            <P>
                                I am a full stack web & mobile developer that specializes
                                in Front-End, React and state management.
                                <br />
                                I have been developing for 3 years in the Web and React
                                ecosystem, since switching from Electronics Engineering
                                and Embedded C Programming.
                                <br />
                                <br />
                                I have done projects from requirements to production.
                                <br />
                                Next.js SSR, React Single page application, React-Native
                                mobile apps, Javascript, Typescript and Mobx.
                                <br />
                                Worked in a remote team, used Clojurescript, Javascript,
                                Node.js, AWS Lambda, Dynamodb, Postgresql, part time
                                managing remote team.
                            </P>
                            <UL>
                                <strong>A little about my coding discipline:</strong>
                                <LI>Practice code optimization and refactoring</LI>
                                <LI>Adhere to DRY and KISS software principles</LI>
                                <LI>Separate Business logic from the view</LI>
                                <LI>Use latest javascript es6</LI>
                                <LI>
                                    Always learning, expanding knowledge (blogs, books,
                                    newsletters, medium, dev.to)
                                </LI>
                                <LI>
                                    Trying new things, keeping up with the advancements in
                                    Javascript, React and Cloud
                                </LI>
                                <LI>Excited and dedicated about web development.</LI>
                                <LI>Great as solo and in a team.</LI>
                                <LI>
                                    Great at solving problems by myself but easily ask for
                                </LI>
                                help.
                            </UL>
                            <H4 className="sectionHeader">Selected Experience</H4>
                            <Grid
                                as="dl"
                                gridAutoFlow="row"
                                gridTemplateColumns="150px 1fr"
                            >
                                <DT>2017 - today</DT>
                                <DD>
                                    <strong>React Full Stack Web Developer</strong>
                                    <br />
                                    <Span>Freelance at Xlucidity</Span>
                                    <UL>
                                        <LI>
                                            Full Stack desktop and mobile Apps built from
                                            the ground up
                                        </LI>
                                        <LI>
                                            <strong>More details on my website</strong>
                                        </LI>
                                    </UL>
                                </DD>
                                <DT>2003 - 2016</DT>
                                <DD>
                                    <strong>Software & Electronics engineer</strong>
                                    <br />
                                    <Span>At Syqe Medical / Start ups / Freelance</Span>
                                    <UL>
                                        <LI>Embedded Software - C</LI>
                                        <LI>Board design (Altium)</LI>
                                        <LI>Layout</LI>
                                    </UL>
                                </DD>
                            </Grid>
                            <H4 className="sectionHeader">Education</H4>
                            <Grid
                                as="dl"
                                gridAutoFlow="row"
                                gridTemplateColumns="150px 1fr"
                            >
                                <DT>1996 - 2003</DT>
                                <DD>
                                    <strong>
                                        BA.Sc. Electronics Computing and Communication
                                        Engineering
                                    </strong>
                                    <br />
                                    <Span color="mute-onwhite">
                                        Technion - Israel institute of technology
                                    </Span>
                                </DD>
                            </Grid>
                        </Box>
                        <Flex flexDirection="column">
                            <H4 className="sectionHeader">Skills</H4>
                            <UL>
                                <LI>React, React Native</LI>
                                <LI>JavaScript, Typescript, ClojureScript, C</LI>
                                <LI>Redux, Mobx</LI>
                                <LI>PostgreSQL, DynamoDB, MongoDB, GraphQL</LI>
                                <LI>Headless CMS - DatoCMS</LI>
                                <LI>Node, Express, Meteor</LI>
                                <LI>AWS Lambda</LI>
                                <LI>Next.js, SSR, Now v2, Microservices, Serverless</LI>
                                <LI>SMS, Emails, Authentication, PayPal API</LI>
                                <LI>
                                    HTML, CSS, SCSS, CSS in JS, Emotion, Styled-System
                                </LI>
                                <LI>Webpack, Traefik, Docker, Service workers</LI>
                                <LI>Development / staging / production setup</LI>
                            </UL>
                            <H4 className="sectionHeader">Areas of Interest</H4>
                            <UL>
                                <LI>Front-End, UI</LI>
                                <LI>Distributed Software</LI>
                                <LI>Cloud</LI>
                                <LI>Blockchain, DAPP, DLT</LI>
                            </UL>
                            <H4 className="sectionHeader">Hobbies</H4>
                            <UL>
                                <LI>Sport</LI>
                                <LI>Medidation</LI>
                            </UL>
                            <H4 className="sectionHeader">Spoken Languages</H4>
                            <UL>
                                <LI>English - Fluent</LI>
                                <LI>Hebrew - Native</LI>
                                <LI>Russian - Native</LI>
                            </UL>
                            <H4 className="sectionHeader">Tools</H4>
                            <UL>
                                <LI>Linux, Windows, Mac</LI>
                                <LI>VSCode, Webstorm</LI>
                                <LI>Eslint, Prettier</LI>
                            </UL>
                            <H4 className="sectionHeader">Contact</H4>
                            <UL>
                                <LI>
                                    <Grid
                                        gridAutoFlow="row"
                                        gridRowGap={1}
                                        gridTemplateColumns="35px 1fr"
                                    >
                                        <DT>
                                            <Web />
                                        </DT>
                                        <DD>
                                            <NavLink
                                                target="_blank"
                                                href="https://lishine.github.io"
                                            />
                                        </DD>
                                        <DT>
                                            <Phone />
                                        </DT>
                                        <DD>
                                            <NavLink
                                                rel="nofollow"
                                                href="tel:+972-52-3747324"
                                            >
                                                +972-52-3747324
                                            </NavLink>
                                        </DD>
                                        <DT>
                                            <Email fill="var(--tertiary)" />
                                        </DT>
                                        <DD>
                                            <NavLink
                                                rel="nofollow"
                                                href="mailto:vim55k@gmail.com"
                                            >
                                                vim55k@gmail.com
                                            </NavLink>
                                        </DD>
                                        <DT>
                                            <Israel />
                                        </DT>
                                        <DD>Israel</DD>
                                    </Grid>
                                </LI>
                            </UL>
                            {/* <UL>
                            <LI>References available on request</LI>
                        </UL> */}
                        </Flex>
                    </Grid>
                </Flex>
            </Box>
        </>
    )
}

export default Page
