import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink } from 'styles/ss-components'
import {
    ProjectTitle,
    SubRemark,
    DoesTitle,
    DoesItem,
    SubLink,
    DoesWrapper,
    DoesList,
    FeatureWrapper,
    FeatureSpan,
} from '../common'
import { Gallery } from '../Gallery'
import { boxCss } from 'styles/ss-utils'
import { mediaUp } from 'styles/utils'

const projectTitle = 'Video courses of Salsa dancing'
const alt = `${projectTitle} - React Next.js SSR web app, Serverless backend, Graphql Postgres db, Headless CMS`

export const Salsa = props => {
    return (
        <Box {...props}>
             <a id="demo1" />
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <Flex mt={1} alignItems="flex-start" flexDirection={['column', null, 'row']}>
                <Box mie={5} as="dl">
                    <SubRemark as="dt">Built from the ground up</SubRemark>
                    <SubLink as="dd" alignItems="center">
                        <Span mie="0.5em">Take a look:</Span>
                        <NavLink target="_blank" href="https://dance-salsa.now.sh" />
                    </SubLink>
                </Box>
                <Grid
                    w={1}
                    maxWidth={['600px']}
                    flex={1}
                    mie={5}
                    mt={[3, null, 2]}
                    justifyContent="space-between"
                    gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))"
                    gridColumnGap={2}
                    gridRowGap={3}
                    css={boxCss.css({
                        [FeatureSpan]: {
                            textAlign: 'center',
                            border: '1px solid var(--onwhite-border)',
                            p: '8px',
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

            <Flex flexDirection={['column', null, null, 'row']}>
                <Flex
                    flex={1}
                    textAlign="center"
                    flexDirection="column"
                    flexWrap="wrap"
                    css={boxCss.css({
                        [DoesWrapper]: {
                            mt: 2,
                            mie: 9,
                        },
                        [mediaUp('md')()]: {
                            maxHeight: '630px',
                            [DoesWrapper]: {
                                maxWidth: '45%',
                            },
                        },
                        [mediaUp('lg')()]: {
                            maxHeight: '530px',
                            [DoesWrapper]: {
                                maxWidth: '28%',
                            },
                        },
                        [mediaUp('xl')()]: {
                            maxHeight: '630px',
                            [DoesWrapper]: {
                                maxWidth: '40%',
                            },
                        },
                    })}
                >
                    <DoesWrapper>
                        <DoesTitle>API</DoesTitle>
                        <DoesList>
                            <DoesItem>
                                Serverless services deployed to Zeit Now v2 on top of AWS
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
                        <DoesTitle>Content management</DoesTitle>
                        <DoesList>
                            <DoesItem>DATO Headless CMS</DoesItem>
                            <DoesItem>
                                <NavLink
                                    href="https://www.datocms.com"
                                    display="inline"
                                />
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
                                Design implemented according to design requirements given
                                in Invision
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
                        <Gallery
                            showThumbnails
                            images={[
                                {
                                    thumbnail: require('../images/salsa/1-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/1.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/1.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/1.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                                {
                                    thumbnail: require('../images/salsa/2-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/2.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/2.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/2.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                                {
                                    thumbnail: require('../images/salsa/3-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/3.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/3.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/3.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                                {
                                    thumbnail: require('../images/salsa/4-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/4.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/4.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/4.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                                {
                                    thumbnail: require('../images/salsa/5-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/5.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/5.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/5.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                                {
                                    thumbnail: require('../images/salsa/6-t.jpg'),
                                    thumbnailAlt: alt,
                                    original: require('../images/salsa/6.jpg'),
                                    originalAlt: alt,
                                    imageSet: [
                                        {
                                            srcSet: require('../images/salsa/6.jpg?webp'),
                                            type: 'image/webp',
                                        },
                                        {
                                            src: require('../images/salsa/6.jpg'),
                                            type: 'image/jpg',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
