import React, { useRef, useState } from 'react'
import { Box, Flex, H4, LI, UL, Grid, Span, NavLink } from 'styles/ss-components'
import { ProjectTitle, SubRemark, Gallery } from './common'
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
                        <Span mie="1em">Have a look please:</Span>
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
                    <H4>API</H4>
                    <DoesList>
                        <LI>
                            Serverless services, deployed to Zeit Now v2 on top of AWS
                            lambda
                        </LI>
                        <LI>JWT in cookie authentication</LI>
                        <LI>Email service with MailGun API, MJML templates</LI>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <H4>Emails generator</H4>
                    <DoesList>
                        <LI>React rendering</LI>
                        <LI>MJML markup</LI>
                        <LI>DOT templates</LI>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <H4>Content managment</H4>
                    <DoesList>
                        <LI>DATO Headless CMS</LI>
                        <LI>
                            <NavLink href="https://www.datocms.com" display="inline" />
                        </LI>
                        <LI>GraphQL API</LI>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <H4>DB</H4>
                    <DoesList>
                        <LI>Hasura GraphQL engine</LI>
                        <LI>Docker on Heroku</LI>
                        <LI>Migrations</LI>
                        <LI>Permissions</LI>
                        <LI>Postgress</LI>
                    </DoesList>
                </DoesWrapper>

                <DoesWrapper>
                    <H4>Client</H4>
                    <DoesList>
                        <LI>Next.js SSR dynamic deploy</LI>
                        <LI>SEO optimized</LI>
                        <LI>SCSS, imported Bootstrap, Emotion, Styled-System </LI>
                        <LI>React state management: Easy-Peasy (Redux + React-hooks)</LI>
                        <LI>PayPal API</LI>
                        <LI>
                            Design implemented according to design requirements given in
                            Invision
                        </LI>
                        <LI>Responsive & adaptive design to 4 types of devices</LI>
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
}
