import React, { useRef, useState } from 'react'
import { Box, Flex, LI, UL, Grid, H4, Span, NavLink, P } from 'styles/ss-components'
import { ProjectTitle, DoesTitle, SubRemark, Gallery, DoesItem } from './common'
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
                [DoesWrapper]: {
                    mt: 2,
                    mie: 4,
                },
                [DoesList]: { mis: '1em' },
                [mediaUp('md')()]: {
                    maxHeight: '630px',
                    [DoesWrapper]: {
                        maxWidth: '50%',
                    },
                },
                [mediaUp('lg')()]: {
                    maxHeight: '480px',
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
                <DoesTitle>API</DoesTitle>
                <DoesList>
                    <DoesItem>Built as a services - serverless ready</DoesItem>
                    <DoesItem>SMS with Nexmo API</DoesItem>
                    <DoesItem>Auth with httpOnly cookie in JWT and SMS</DoesItem>
                    <DoesItem>Websockets server</DoesItem>
                    <DoesItem>Websockets test client in Codesandbox</DoesItem>
                    <DoesItem>
                        Device Auth with Private/Public keys with libsodium
                    </DoesItem>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <DoesTitle>Deploy</DoesTitle>
                <DoesList>
                    <DoesItem>Digital ocean</DoesItem>
                    <DoesItem>Everything in docker containers</DoesItem>
                    <DoesItem>Traefik reverse proxy + Letsencrypt</DoesItem>
                    <DoesItem>Single command deploy to staging/production</DoesItem>
                    <DoesItem>Single command Hasura console through ssh</DoesItem>
                    <DoesItem>Single command DB fill through ssh</DoesItem>
                    <DoesItem>Single command logs through ssh</DoesItem>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <DoesTitle>DB</DoesTitle>
                <DoesList>
                    <DoesItem>Hasura GraphQL engine</DoesItem>
                    <DoesItem>Migrations</DoesItem>
                    <DoesItem>Permissions</DoesItem>
                    <DoesItem>Postgress</DoesItem>
                </DoesList>
            </DoesWrapper>

            <DoesWrapper>
                <DoesTitle>Client</DoesTitle>
                <DoesList>
                    <DoesItem>Next.js SSR dynamic deploy</DoesItem>
                    <DoesItem>SCSS, imported Bootstrap, Emotion, Styled-System</DoesItem>
                    <DoesItem>
                        React state management: Easy-Peasy (Redux + React-hooks)
                    </DoesItem>
                    <DoesItem>Design - currently, by self consideration</DoesItem>
                    <DoesItem>
                        Latest CSS qualities: Flex, Grid, CSS custom and logical
                        properties
                    </DoesItem>
                </DoesList>
            </DoesWrapper>
        </Flex>

        <Flex justifyContent="center">
            <Box mt={5} width="100%" maxWidth="600px">
                <Gallery
                    showThumbnails
                    images={[1, 2, 3, 4].map(index => `/img/sbs/${index}.png`)}
                />
            </Box>
        </Flex>
    </Box>
)
