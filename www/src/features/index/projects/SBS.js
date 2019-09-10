import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink, P } from 'styles/ss-components'
import { ProjectTitle, SubRemark, Gallery } from './common'
import { boxCss } from 'styles/ss-utils'
import { mediaUp } from 'styles/utils'

export const SBS = props => (
    <Box {...props}>
        <ProjectTitle>Street Building Sign</ProjectTitle>
        <Flex mt={1} alignItems="flex-start" flexDirection={['column', null, 'row']}>
            <Box mie={5}>
                <SubRemark>Built from the ground up</SubRemark>
                <P>
                    <NavLink href="https://sbs.golden-minutes.com" />
                </P>
            </Box>
            <Grid
                w={1}
                maxWidth={['600px']}
                flex={1}
                mie={5}
                mt={[3, null, '12px']}
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
                    },
                    [Box]: {
                        textAlign: 'center',
                    },
                })}
            >
                <Box>
                    <Span>Manage CRUD users</Span>
                </Box>
                <Box>
                    <Span>Manage CRUD devices</Span>
                </Box>
                <Box>
                    <Span>Live device alerts</Span>
                </Box>
                <Box>
                    <Span>Control device</Span>
                </Box>
                <Box>
                    <Span>Manage permissions</Span>
                </Box>
            </Grid>
        </Flex>

        <Flex
            textAlign="center"
            flexDirection="column"
            flexWrap="wrap"
            css={boxCss.css({
                [H4]: { textAlign: 'start' },
                [LI]: { textAlign: 'start', mb: 1 },

                [Box]: {
                    mt: 2,
                    mie: 4,
                },
                [UL]: { mis: '1em' },
                [mediaUp('md')()]: {
                    maxHeight: '830px',
                    [Box]: {
                        maxWidth: '50%',
                    },
                },
                [mediaUp('lg')()]: {
                    maxHeight: '530px',
                    [Box]: {
                        maxWidth: '33%',
                    },
                    [UL]: { mis: '-1em' },
                },
                [mediaUp('xl')()]: {
                    maxHeight: '330px',
                    [Box]: {
                        maxWidth: '25%',
                    },
                },
            })}
        >
            <Box>
                <H4>API</H4>
                <UL>
                    <LI>Built as a services - serverless ready</LI>
                    <LI>SMS with Nexmo API</LI>
                    <LI>Auth with httpOnly cookie in JWT and SMS</LI>
                    <LI>Websockets server</LI>
                    <LI>Websockets test client in Codesandbox</LI>
                    <LI>Device Auth with Private/Public keys with libsodium</LI>
                </UL>
            </Box>

            <Box>
                <H4>Deploy</H4>
                <UL>
                    <LI>Digital ocean</LI>
                    <LI>Everything in docker containers</LI>
                    <LI>Traefik reverse proxy + Letsencrypt</LI>
                    <LI>Single command deploy to staging/production</LI>
                    <LI>Single command Hasura console through ssh</LI>
                    <LI>Single command DB fill through ssh</LI>
                    <LI>Single command logs through ssh</LI>
                </UL>
            </Box>

            <Box>
                <H4>DB</H4>
                <UL>
                    <LI>Hasura GraphQL engine</LI>
                    <LI>Migrations</LI>
                    <LI>Permissions</LI>
                    <LI>Postgress</LI>
                </UL>
            </Box>

            <Box>
                <H4>Client</H4>
                <UL>
                    <LI>Next.js SSR dynamic deploy</LI>
                    <LI>SCSS, imported Bootstrap, Emotion, Styled-System</LI>
                    <LI>React state management: Easy-Peasy (Redux + React-hooks)</LI>
                    <LI>Design - currently, by self consideration</LI>
                    <LI>
                        Latest CSS qualities: Flex, Grid, CSS custom and logical
                        properties
                    </LI>
                </UL>
            </Box>
        </Flex>

        <Box mt={4} width="100%" maxWidth="600px">
            <Gallery images={['/img/salsa/1.png']} />
        </Box>
    </Box>
)
