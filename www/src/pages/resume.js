import React, { useRef, useState } from 'react'
import * as ss from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import styled from '@emotion/styled'

const { Box, Flex, H1, H2, H4, Grid, P } = ss
const SectionHeader = H4
const LI = props => <ss.LI {...{ textIndent: 0, pis: '1.5em', dot: '·', ...props }} />
const UL = styled(ss.UL)({ mis: 0 })

const Page = () => (
    <Box
        mb={8}
        width="1024px"
        className="grid-container"
        px={8}
        color="black"
        css={boxCss.css({
            [P]: {
                fontFamily: 'Crimson Pro, serif',
                fontSize: '20px',
            },
            [SectionHeader]: {
                fontWeight: '500',
                mb: 1,
            },
        })}
    >
        <H1 mb={1}>
            <strong>Pavel Ravits</strong>
        </H1>
        <H4>React developer</H4>

        <H1 mt={7} mb={8} color="blue">
            ...looking forward to collaborate with a team of great developers
        </H1>
        <Grid gridAutoFlow="column" gridTemplateColumns="6fr 4fr" gridColumnGap={8}>
            <Box>
                <SectionHeader>Background</SectionHeader>
                <P>
                    2.5 years experience with React.js Developed 2 Next.js projects using
                    Css-in-js to implement design Developed mobile app using React-Native,
                    JS, Typescript and Mobx. Half year worked in a remote team using
                    Clojurescript on web and mobile clients and Node.js on AWS Lambda +
                    Dynamodb + Redshift/Postgresql. Developed web app using React + Meteor
                    My focus spread across client and server.
                </P>
                <br />
                <P>
                    Mostly I like the Front-end and to take care of the state management.
                    I care about the time I am payed for and use it for efficient
                    production. I care about the code quality and and refactor a lot. I
                    adhere to DRY, KISS, YAGNI software principles. I can work
                    autonomously and in a team. Can solve problems by myself but easily
                    ask for help. Used communication tools - slack, Jira, Timedoctor.
                    Thank you for reading so far.{' '}
                </P>
            </Box>
            <Box>
                <SectionHeader>Skills</SectionHeader>
                <UL>
                    <LI>a</LI>
                    <LI>b</LI>
                </UL>
            </Box>
        </Grid>
    </Box>
)

export default Page
