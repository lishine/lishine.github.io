import React, { useRef, useState } from 'react'
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
    Svg,
    NavLink,
    Span,
    DD,
    DT,
    Button,
} from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'

import { Email, Web, Phone, Israel } from 'svg/icons/index'

const LI = props => <_LI {...{ textIndent: 0, pis: '1.5em', dot: '·', ...props }} />
const UL = styled(_UL)({ mis: 0 })

const Page = () => {
    const ref = useRef(null)
    return (
        <Box pb={15} className="grid-container" position="relative">
            <ReactToPrint
                trigger={() => (
                    <Box position="absolute" top={0} right={0}>
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
                pt={10}
                px={9}
                width="1024px"
                height="1350px"
                color="black"
                css={boxCss.css({
                    h1: {
                        fontFamily: 'Crimson Pro, serif',
                        fontSize: '40px',
                        transform: 'translateY(7px)',
                        letterSpacing: '0.03em',
                    },
                    h4: {
                        fontFamily: 'Crimson Pro, serif',
                        fontWeight: 600,
                        fontSize: '24px',
                        letterSpacing: '0.03em',
                        '> light': {
                            fontWeight: 500,
                        },
                    },
                    'p, li, a, span, dt, dd': {
                        fontFamily: 'Crimson Pro, serif',
                        fontSize: '20px',
                        lineHeight: '24px',
                        '> strong': {
                            color: '#333333',
                        },
                    },
                    'p, ol, ul, dl': { transform: 'translateY(5px)' },
                    'p, ul': { mb: 3 },
                    '.sectionHeader': {
                        mb: 1,
                    },
                    '--link': '#6387C5',
                })}
            >
                <H1 mb={1}>
                    <strong>Pavel Ravits</strong>
                </H1>
                <H4 mt="-5px">
                    <light>React developer</light>
                </H4>

                <H1 mt={6} mb={7} color="link">
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
                            I have been developing for 2.5 years in the{' '}
                            <strong>Web and React ecosystem</strong> since switching from
                            Electronics engineering and Embedded programming.
                            <br />
                            <br />
                            Done 2 <strong>Next.js projects</strong> using Css-In-Js
                            according to design
                            <br />
                            Developed <strong>mobile app</strong> using React-Native,{' '}
                            <strong>Javascript, Typescript</strong> and Mobx.
                            <br />
                            Half year worked with a remote team using{' '}
                            <strong>Clojurescript</strong> on web and mobile clients and
                            Node.js on AWS Lambda + Dynamodb + Redshift/Postgresql.
                            <br />
                            Developed web app using React + Meteor
                            <br />
                            <br />
                            Mostly I like{' '}
                            <Span fontStyle="italic">
                                {' '}
                                Front-end and state management{' '}
                            </Span>
                            .
                            <br />I care about the time I am payed for and use it for
                            efficient production.{' '}
                            <strong>
                                I care the most about code quality and refactor a lot
                            </strong>
                            , adhere to <Span fontStyle="italic"> DRY, KISS, YAGNI</Span>{' '}
                            software principles,{' '}
                            <Span fontStyle="italic">
                                {' '}
                                can work autonomously and in a team{' '}
                            </Span>
                            . Can solve problems by myself but easily ask for help. Used
                            communication tools - slack, Jira, Timedoctor.
                        </P>
                        <H4 className="sectionHeader">Selected Experience</H4>
                        <Grid as="dl" gridAutoFlow="row" gridTemplateColumns="150px 1fr">
                            <DT>2017 - today</DT>
                            <DD>
                                <strong>React Full Stack Web Developer</strong>
                                <br />
                                <Span>Freelance at Xlucidity</Span>
                                <UL>
                                    <LI>
                                        Full Stack desktop and mobile Apps built from the
                                        ground up
                                    </LI>
                                    <LI>
                                        Projects in detail:
                                        <br />
                                        <NavLink href="https://lishine.github.io/portfolio" />
                                    </LI>
                                </UL>
                            </DD>
                            <DT>2003 - 2016</DT>
                            <DD>
                                <strong>Software & Electronics engineer</strong>
                                <br />
                                <Span>At Syqe Medical / Start ups / Freelance</Span>
                                <UL>
                                    <LI>Embedded Software</LI>
                                    <LI>Board design (Altium)</LI>
                                    <LI>Layout</LI>
                                </UL>
                            </DD>
                        </Grid>
                        <H4 className="sectionHeader">Education</H4>
                        <Grid as="dl" gridAutoFlow="row" gridTemplateColumns="150px 1fr">
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
                            <LI>JavaScript, Typescript, ClojureScript</LI>
                            <LI>Redux, Mobx</LI>
                            <LI>Postgres, MongoDB, GraphQL</LI>
                            <LI>Headless CMS - DatoCMS</LI>
                            <LI>Node, Express, Meteor</LI>
                            <LI>AWS - Lambda</LI>
                            <LI>Next.js, SSR, Now v2</LI>
                            <LI>SMS, Emails, Authentication, PayPal API</LI>
                            <LI>SCSS, CSS in JS, Emotion, Styled-System</LI>
                            <LI>Traefik, Docker, Serverless, Service workers</LI>
                        </UL>
                        <H4 className="sectionHeader">Areas of Interest</H4>
                        <UL>
                            <LI>Front End UI</LI>
                            <LI>Distributed Software</LI>
                            <LI>Cloud</LI>
                        </UL>
                        <H4 className="sectionHeader">Hobbies</H4>
                        <UL>
                            <LI>Sport</LI>
                        </UL>
                        <H4 className="sectionHeader">Spoken Languages</H4>
                        <UL>
                            <LI>English</LI>
                            <LI>Hebrew</LI>
                            <LI>Russian</LI>
                        </UL>
                        <H4 className="sectionHeader">Tools</H4>
                        <UL>
                            <LI>Linux, Windows, Mac</LI>
                            <LI>VSCode</LI>
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
                                        <NavLink href="https://lishine.github.io" />
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
                                        <Email />
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
                        <UL>
                            <LI>References available on request</LI>
                        </UL>
                    </Flex>
                </Grid>
            </Flex>
        </Box>
    )
}

export default Page
