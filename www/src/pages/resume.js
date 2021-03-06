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
    H5,
} from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'

import { Email, Web, Phone, Israel } from 'svg/icons/index'
import { mediaUp, mediaDown } from 'styles/utils'

const print = false
const downloadPdf = false

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

const title = 'Pavel Ravits - Web Developer - Resume'

const Page = () => {
    const ref = useRef(null)
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Resume" />
            </Head>

            <Box pb={15} className="grid-container" position="relative">
                {print && (
                    <ReactToPrint
                        trigger={() => (
                            <Box
                                position="absolute"
                                display={['none', 'none', 'block']}
                                top={1}
                                left={[1, '70%']}
                            >
                                <button className="btn">PRINT</button>
                            </Box>
                        )}
                        content={() => ref.current}
                    />
                )}
                {downloadPdf && (
                    <Box position="absolute" top={[2, 1]} left={[2, '80%']}>
                        <NavLink
                            href={`/${title}.pdf`}
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <button className="btn">DOWNLOAD PDF</button>
                        </NavLink>
                    </Box>
                )}
                <Flex
                    ref={ref}
                    flexDirection="column"
                    color="black"
                    css={boxCss.css({
                        pt: 3,
                        [mediaDown('lg')()]: {
                            px: 3,
                            maxWidth: '600px',
                        },
                        [mediaUp('lg')()]: {
                            px: 9,
                            width: '1024px',
                        },
                        '@media print': {
                            pt: 11,
                            px: 9,
                            width: '1024px',
                            height: '1350px',
                        },
                        'h1, h4, p, li, a, span, dt, dd, ul': {
                            fontFamily: 'Crimson Pro, serif',
                        },
                        h1: {
                            fontSize: '38px',
                            transform: 'translateY(7px)',
                            letterSpacing: '0.03em',
                            '> strong': {
                                fontWeight: 600,
                            },
                        },
                        [H4]: {
                            fontSize: '24px',
                            letterSpacing: '0.03em',
                        },
                        'p, li, a, span, dt, dd, ul': {
                            fontSize: '19px',
                            lineHeight: '24px',
                            '> strong': {
                                fontWeight: 600,
                            },
                        },
                        strong: {
                            fontWeight: 600,
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
                    <H4 fontWeight="500">Web developer</H4>

                    {/* <H1 mt={3} mb={4} color="link">
                        ...seeking <strong>collaboration</strong> with{' '}
                        <strong>passionate</strong> developers
                    </H1> */}
                    <Grid
                        mt={3}
                        flex={1}
                        gridAutoFlow="row"
                        gridColumnGap={9}
                        css={boxCss.css({
                            [mediaUp('lg')()]: {
                                gridAutoFlow: 'column',
                                gridTemplateColumns: '55fr 45fr',
                            },
                            '@media print': {
                                gridAutoFlow: 'column',
                                gridTemplateColumns: '55fr 45fr',
                            },
                        })}
                    >
                        <Box>
                            <H4 className="sectionHeader">Background</H4>
                            <P>
                                I am a Full Stack web developer that specializes in{' '}
                                <strong>Node.js</strong> and <strong> React</strong>.
                                <br />
                                Have been developing for
                                <strong>
                                    {' '}
                                    3 years in Javascript/Typescript and React ecosystem
                                </strong>
                                , since switching from Electronics Engineering and
                                Embedded.
                                <br />
                                Writing software since age 13.
                                <br />
                            </P>
                            <H5>
                                <strong>A little about my coding practice</strong>
                            </H5>
                            <UL>
                                <LI>
                                    Optimize, refactor and practice single source of truth
                                </LI>
                                <LI>Separate business logic from view</LI>
                                <LI>Use latest javascript/typescript esnext</LI>
                                <LI>
                                    Learning and expanding knowledge, trying new things,
                                    keeping up with the advancements.
                                </LI>
                                <LI>Passionate about web development</LI>
                                <LI>Great as a solo and in a team.</LI>
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
                                        <strong>Full Stack Web Developer</strong>
                                        <br />
                                        <Span italic>Xlucidity</Span>
                                    </DD>
                                </Flex>
                                <UL mt={1}>
                                    <LI>
                                        Full Stack desktop and mobile Apps built from
                                        requirements to production.
                                    </LI>
                                    <LI>
                                        <strong>
                                            Next.js SSR, React and Redux single-page
                                            applications
                                        </strong>{' '}
                                        using CSS-IN-JS technology
                                    </LI>
                                    <LI>
                                        React Native mobile apps using Javascript,
                                        Typescript, and Mobx.
                                    </LI>
                                    <LI>
                                        <strong>Worked in a remote team</strong>, using
                                        Jira, Mysql, Node.js, REST, React, CI/CD.
                                    </LI>
                                    <LI>
                                        <strong>Worked in a remote team</strong>, using
                                        Clojurescript, Javascript, Node.js, AWS Lambda,
                                        Dynamodb, Postgresql.
                                    </LI>
                                    <LI>IOT - internet-connected devices</LI>
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
                                    </DD>
                                </Flex>
                                <Flex mt={1}>
                                    <UL flex={1}>
                                        <LI>Embedded Software - C</LI>
                                        <LI>Board design (Altium)</LI>
                                        <LI>Digital and analog</LI>
                                    </UL>
                                    <UL flex={1} ml={3}>
                                        <LI>Audio and IOT and medical applications</LI>
                                        <LI>Layout</LI>
                                    </UL>
                                </Flex>
                                <H4 className="sectionHeader">Education</H4>
                                <Flex as="dl">
                                    <Years>1996 - 2000</Years>
                                    <DD>
                                        <strong>
                                            BA.Sc. Electronics, Computing and
                                            Communication Engineering
                                        </strong>
                                        <br />
                                        <Span italic>
                                            Technion - Israel Institute of technology
                                        </Span>
                                    </DD>
                                </Flex>
                            </Box>
                        </Box>
                        <Flex mt={[2, 0]} flexDirection="column">
                            <H4 className="sectionHeader">Skills</H4>
                            <UL>
                                <LI>React, React Native</LI>
                                <LI>JavaScript, Typescript, ClojureScript, C</LI>
                                <LI>Redux, Mobx, Context, Hooks</LI>
                                <LI>PostgreSQL, DynamoDB, MongoDB, Sequalize</LI>
                                <LI>API - Rest, GraphQL</LI>
                                <LI>Functional Programming</LI>
                                <LI>Headless CMS</LI>
                                <LI>NodeJS, Express, Websockets, Meteor</LI>
                                <LI>
                                    AWS Lambda, Next.js, SSR, Microservices, Serverless
                                </LI>
                                <LI>SMS, Emails, Authentication, PayPal API</LI>
                                <LI>
                                    HTML, CSS, SCSS, CSS in JS, Emotion, Styled-System
                                </LI>
                                <LI>
                                    Git, Webpack, Babel, Docker, Traefik, Service workers
                                </LI>
                                <LI>CI/CD. Development / staging / production setup</LI>
                                <LI>
                                    Testing, end-to-end, unit, integration. Mocha, Jest,
                                    Cypress
                                </LI>
                            </UL>
                            <H4 className="sectionHeader">Areas of Interest</H4>
                            <UL>
                                <LI>Front-End, UI</LI>
                                <LI>Servers</LI>
                                <LI>Typescript</LI>
                                <LI>React</LI>
                                <LI>GraphQL</LI>
                            </UL>
                            <H4 className="sectionHeader">In my free time</H4>
                            <UL>
                                <LI>Learning new staff</LI>
                                <LI>Sport and meditation</LI>
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
                            <Grid
                                as="dl"
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
                                {print && (
                                    <>
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
                                    </>
                                )}
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
                        </Flex>
                    </Grid>
                </Flex>
            </Box>
        </div>
    )
}

export default Page
