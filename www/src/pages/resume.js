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
    DL,
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
const UL = styled(_UL)()
const Years = styled(DT)()

const Page = () => {
    const ref = useRef(null)
    return (
        <div>
            <Head>
                <title>Pavel Ravits - React Web Developer - Resume</title>
                <meta name="description" content="Resume" />
            </Head>

            <Box pb={15} className="grid-container" position="relative">
                <ReactToPrint
                    trigger={() => (
                        <Box position="absolute" top={3} right={9}>
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
                        'h1, h4, p, li, a, span, dt, dd, ul': {
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
                        'p, li, a, [Span], dt, dd, ul': {
                            fontSize: '19px',
                            lineHeight: '24px',
                            '> strong': {
                                fontWeight: 600,
                            },
                        },
                        'p, ol, ul, dl': { transform: 'translateY(5px)' },
                        'p, ul': { mb: 2 },
                        '.sectionHeader': {
                            fontWeight: 600,
                            mb: 1,
                        },
                    })}
                >
                    <H1>
                        <strong>Pavel Ravits</strong>
                    </H1>
                    <H4 fontWeight="500">React developer</H4>

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
                                I am a Full Stack <strong>web & mobile</strong> developer
                                that specializes in <strong>Front-End, React</strong> and
                                state management.
                                <br />
                                Have been developing for
                                <strong> 3 years in Web and React ecosystem</strong>,
                                since switching from Electronics Engineering and Embedded
                                C Programming.
                                <br />
                                Programming since age 13.
                                <br />
                                <Span italic>
                                    In your team I will be the positive, calm and
                                    attentive guy.
                                </Span>
                            </P>
                            <UL>
                                <strong>A little about my coding practice</strong>
                                <LI>Practice code optimization and refactoring</LI>
                                <LI>
                                    Adhere to <strong>DRY and KISS</strong> software
                                    principles
                                </LI>
                                <LI>Separate Business logic from the view</LI>
                                <LI>Use latest javascript es6</LI>
                                <LI>
                                    <strong>Always learning</strong>, expanding knowledge
                                    (blogs, books, newsletters, medium, dev.to)
                                </LI>
                                <LI>
                                    Trying new things, keeping up with the advancements in
                                    Javascript, React and Cloud
                                </LI>
                                <LI>
                                    <strong>Excited and dedicated</strong> about web
                                    development.
                                </LI>
                                <LI>
                                    <strong>Great as solo and in a team.</strong>
                                </LI>
                                <LI>
                                    Great at solving problems by myself but easily ask for
                                    help.
                                </LI>
                            </UL>
                            <H4 className="sectionHeader">Selected Experience</H4>
                            <Box
                                css={boxCss.css({
                                    [Years]: {
                                        ml: '1em',
                                        mr: 4,
                                        whiteSpace: 'nowrap',
                                    },
                                })}
                            >
                                <Flex as="dl">
                                    <Years>2017 - today</Years>
                                    <DD>
                                        <strong>React Full Stack Web Developer</strong>
                                        <br />
                                        <Span>Freelance at Xlucidity</Span>
                                    </DD>
                                </Flex>
                                <UL>
                                    <LI>
                                        Full Stack desktop and mobile Apps built from
                                        requirements to production.
                                    </LI>
                                    <LI>
                                        <strong>
                                            Next.js SSR and React single page applications
                                        </strong>{' '}
                                        using latest CSS-IN-JS technology
                                    </LI>
                                    <LI>
                                        React Native mobile apps using Javascript,
                                        Typescript and Mobx.
                                    </LI>
                                    <LI>
                                        <strong>Worked in a remote team</strong>, using
                                        Clojurescript, Javascript, Node.js, AWS Lambda,
                                        Dynamodb, Postgresql and
                                        <strong> part time managing</strong>.
                                    </LI>
                                    <LI>IOT - internet connected devices</LI>
                                    <LI>
                                        <NavLink
                                            target="_blank"
                                            href="https://lishine.github.io"
                                        >
                                            <Span fontStyle="italic">
                                                More details on my website
                                            </Span>
                                        </NavLink>
                                    </LI>
                                </UL>
                                <Flex as="dl">
                                    <Years>2003 - 2016</Years>
                                    <DD>
                                        <strong>Software & Electronics engineer</strong>
                                        <br />
                                        <Span>
                                            At Syqe Medical / Start ups / Freelance
                                        </Span>
                                    </DD>
                                </Flex>
                                <Flex>
                                    <UL flex={1}>
                                        <LI>Embedded Software - C</LI>
                                        <LI>Board design (Altium)</LI>
                                        <LI>Digital and analog</LI>
                                    </UL>
                                    <UL flex={1} ml={3}>
                                        <LI>Audio and Iot and medical applications</LI>
                                        <LI>Layout</LI>
                                    </UL>
                                </Flex>
                                <H4 className="sectionHeader">Education</H4>
                                <Flex as="dl">
                                    <Years>1996 - 2003</Years>
                                    <DD>
                                        <strong>
                                            BA.Sc. Electronics, Computing and
                                            Communication Engineering
                                        </strong>
                                        <br />
                                        <Span color="mute-onwhite">
                                            Technion - Israel institute of technology
                                        </Span>
                                    </DD>
                                </Flex>
                            </Box>
                        </Box>
                        <Flex flexDirection="column">
                            <H4 className="sectionHeader">Skills</H4>
                            <UL>
                                <LI>Build Server/Client applications</LI>
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
                                <LI>Blockchain DAPP</LI>
                            </UL>
                            <H4 className="sectionHeader">In my free time</H4>
                            <UL>
                                <LI>Doing sport and meditation</LI>
                                <LI>Learning new staff</LI>
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
                                        <span>
                                            <Web />
                                        </span>
                                        <span>
                                            <NavLink
                                                target="_blank"
                                                href="https://lishine.github.io"
                                            />
                                        </span>
                                        <span>
                                            <Phone />
                                        </span>
                                        <span>
                                            <NavLink
                                                rel="nofollow"
                                                href="tel:+972-52-3747324"
                                            >
                                                +972-52-3747324
                                            </NavLink>
                                        </span>
                                        <span>
                                            <Email fill="var(--tertiary)" />
                                        </span>
                                        <span>
                                            <NavLink
                                                rel="nofollow"
                                                href="mailto:vim55k@gmail.com"
                                            >
                                                vim55k@gmail.com
                                            </NavLink>
                                        </span>
                                        <span>
                                            <Israel />
                                        </span>
                                        <span>Israel</span>
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
        </div>
    )
}

export default Page
