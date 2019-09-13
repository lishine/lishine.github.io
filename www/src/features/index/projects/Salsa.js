import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink } from 'styles/ss-components'
import { ProjectTitle, SubRemark, Gallery, DoesTitle, DoesItem } from './common'
import { boxCss } from 'styles/ss-utils'
import { mediaUp } from 'styles/utils'
import styled from '@emotion/styled'

const FeatureWrapper = styled(Box)()
const FeatureSpan = styled(Span)()

const DoesWrapper = styled(Box)()
const DoesList = styled(UL)()

export const Salsa = props => {
    return (
        <Box {...props}>
            <ProjectTitle>Video courses of Salsa dancing</ProjectTitle>
            <Flex mt={1} alignItems="flex-start" flexDirection={['column', null, 'row']}>
                <Box mie={5}>
                    <SubRemark>Built from the ground up</SubRemark>
                    <Flex as="p" alignItems="center">
                        <Span mie="0.5em">Take a look:</Span>
                        <NavLink href="https://do-salsa.tk" />
                    </Flex>
                </Box>
                <Grid
                    w={1}
                    maxWidth={['600px']}
                    flex={1}
                    mie={5}
                    mt={[3, null, '12px']}
                    justifyContent="space-between"
                    gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))"
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
                        <FeatureSpan> Landing page </FeatureSpan>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureSpan> Blog</FeatureSpan>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureSpan> Buy course</FeatureSpan>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureSpan> Learn course</FeatureSpan>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureSpan> Manage content</FeatureSpan>
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
                        maxHeight: '830px',
                        [DoesWrapper]: {
                            maxWidth: '45%',
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
                    <DoesTitle>API</DoesTitle>
                    <DoesList>
                        <DoesItem>
                            Serverless services, deployed to Zeit Now v2 on top of AWS
                            lambda
                        </DoesItem>
                        <DoesItem>JWT in cookie authentication</DoesItem>
                        <DoesItem>
                            Email service with MailGun API, MJML templates
                        </DoesItem>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <DoesTitle>Emails generator</DoesTitle>
                    <DoesList>
                        <DoesItem>React rendering</DoesItem>
                        <DoesItem>MJML markup</DoesItem>
                        <DoesItem>DOT templates</DoesItem>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <DoesTitle>Content managment</DoesTitle>
                    <DoesList>
                        <DoesItem>DATO Headless CMS</DoesItem>
                        <DoesItem>
                            <NavLink href="https://www.datocms.com" display="inline" />
                        </DoesItem>
                        <DoesItem>GraphQL API</DoesItem>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <DoesTitle>DB</DoesTitle>
                    <DoesList>
                        <DoesItem>Hasura GraphQL engine</DoesItem>
                        <DoesItem>Docker on Heroku</DoesItem>
                        <DoesItem>Migrations</DoesItem>
                        <DoesItem>Permissions</DoesItem>
                        <DoesItem>Postgress</DoesItem>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <DoesTitle>Client</DoesTitle>
                    <DoesList>
                        <DoesItem>Next.js SSR dynamic deploy</DoesItem>
                        <DoesItem>SEO optimized</DoesItem>
                        <DoesItem>
                            SCSS, imported Bootstrap, Emotion, Styled-System{' '}
                        </DoesItem>
                        <DoesItem>
                            React state management: Easy-Peasy (Redux + React-hooks)
                        </DoesItem>
                        <DoesItem>PayPal API</DoesItem>
                        <DoesItem>
                            Design implemented according to design requirements given in
                            Invision
                        </DoesItem>
                        <DoesItem>
                            Responsive & adaptive design to 4 types of devices
                        </DoesItem>
                        <DoesItem>
                            Latest CSS qualities: Flex, Grid, CSS custom and logical
                            properties
                        </DoesItem>
                    </DoesList>
                </DoesWrapper>
            </Flex>

            <Flex justifyContent="center">
                <Box mt={5} width="100%" maxWidth="600px">
                    <Gallery images={['/img/salsa/1.png']} />
                </Box>
            </Flex>
        </Box>
    )
}
