import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink, P } from 'styles/ss-components'
import { ProjectTitle, SubRemark, Gallery } from './common'
import { boxCss } from 'styles/ss-utils'
import { mediaUp } from 'styles/utils'
import styled from '@emotion/styled'

const FeatureWrapper = styled(Box)()
const FeatureSpan = styled(Span)()

const DoesWrapper = styled(Box)()
const DoesList = styled(UL)()

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
                    [FeatureSpan]: {
                        textAlign: 'center',
                        border: '1px solid var(--onwhite-border)',
                        p: '5px',
                    },
                    [FeatureWrapper]: {
                        textAlign: 'center',
                    },
                })}
            >
                <FeatureWrapper>
                    <FeatureSpan>Manage CRUD users</FeatureSpan>
                </FeatureWrapper>
                <FeatureWrapper>
                    <FeatureSpan>Manage CRUD devices</FeatureSpan>
                </FeatureWrapper>
                <FeatureWrapper>
                    <FeatureSpan>Live device alerts</FeatureSpan>
                </FeatureWrapper>
                <FeatureWrapper>
                    <FeatureSpan>Control device</FeatureSpan>
                </FeatureWrapper>
                <FeatureWrapper>
                    <FeatureSpan>Manage permissions</FeatureSpan>
                </FeatureWrapper>
            </Grid>
        </Flex>

        <Flex
            textAlign="center"
            flexDirection="column"
            flexWrap="wrap"
            css={boxCss.css({
                [H4]: { textAlign: 'start' },
                [LI]: { textAlign: 'start', mb: 1 },

                [DoesWrapper]: {
                    mt: 2,
                    mie: 4,
                },
                [DoesList]: { mis: '1em' },
                [mediaUp('md')()]: {
                    maxHeight: '830px',
                    [DoesWrapper]: {
                        maxWidth: '50%',
                    },
                },
                [mediaUp('lg')()]: {
                    maxHeight: '530px',
                    [DoesWrapper]: {
                        maxWidth: '33%',
                    },
                    [DoesList]: { mis: '-1em' },
                },
                [mediaUp('xl')()]: {
                    maxHeight: '330px',
                    [DoesWrapper]: {
                        maxWidth: '25%',
                    },
                },
            })}
        >
            <DoesWrapper>
                <H4>API</H4>
                <DoesList>
                    <LI>Built as a services - serverless ready</LI>
                    <LI>SMS with Nexmo API</LI>
                    <LI>Auth with httpOnly cookie in JWT and SMS</LI>
                    <LI>Websockets server</LI>
                    <LI>Websockets test client in Codesandbox</LI>
                    <LI>Device Auth with Private/Public keys with libsodium</LI>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <H4>Deploy</H4>
                <DoesList>
                    <LI>Digital ocean</LI>
                    <LI>Everything in docker containers</LI>
                    <LI>Traefik reverse proxy + Letsencrypt</LI>
                    <LI>Single command deploy to staging/production</LI>
                    <LI>Single command Hasura console through ssh</LI>
                    <LI>Single command DB fill through ssh</LI>
                    <LI>Single command logs through ssh</LI>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <H4>DB</H4>
                <DoesList>
                    <LI>Hasura GraphQL engine</LI>
                    <LI>Migrations</LI>
                    <LI>Permissions</LI>
                    <LI>Postgress</LI>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <H4>Client</H4>
                <DoesList>
                    <LI>Next.js SSR dynamic deploy</LI>
                    <LI>SCSS, imported Bootstrap, Emotion, Styled-System</LI>
                    <LI>React state management: Easy-Peasy (Redux + React-hooks)</LI>
                    <LI>Design - currently, by self consideration</LI>
                    <LI>
                        Latest CSS qualities: Flex, Grid, CSS custom and logical
                        properties
                    </LI>
                </DoesList>
            </DoesWrapper>
        </Flex>

        <Box mt={4} width="100%" maxWidth="600px">
            <Gallery images={['/img/salsa/1.png']} />
        </Box>
    </Box>
)
