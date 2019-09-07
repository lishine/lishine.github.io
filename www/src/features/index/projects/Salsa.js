import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink } from 'styles/ss-components'
import { ProjectTitle, SubRemark, Gallery } from './common'
import { boxCss } from 'styles/ss-utils'

export const Salsa = () => (
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
                        Serverless services, deployed to Zeit Now v2 on top of AWS lambda
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
                    <LI>CSS: SCSS, imported Bootstrap, Emotion, Styled-System </LI>
                    <LI>React state management: Easy-Peasy (Redux + React-hooks)</LI>
                    <LI>PayPal API</LI>
                    <LI>
                        Design implemented according to design requirements given in
                        Invision
                    </LI>
                </UL>
            </Box>
        </Flex>

        <Box mt={4} width="100%" maxWidth="600px">
            <Gallery images={['/img/salsa/1.png']} />
        </Box>
        {/* <Image
                    css={imageFrameStyles}
                    mt={4}
                    width="100%"
                    maxWidth="600px"
                    src="/img/salsa/1.png"
                /> */}
    </Box>
)
