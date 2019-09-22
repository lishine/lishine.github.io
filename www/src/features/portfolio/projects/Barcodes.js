import React, { useRef, useState } from 'react'
import { Box, H4, UL, NavLink, Image, Flex, Grid } from 'styles/ss-components'
import {
    ProjectTitle,
    SubRemark,
    SubLink,
    DoesList,
    DoesTitle,
    DoesItem,
    DoesWrapper,
} from '../common'

export const Barcodes = props => (
    <Box {...props}>
        <ProjectTitle>Manage barcodes for users</ProjectTitle>
        <SubRemark>Built from the ground up</SubRemark>
        <SubLink>
            <NavLink href="https://github.com/lishine/login-full-stack">
                Source - https://github.com/lishine/login-full-stack
            </NavLink>
        </SubLink>
        <Grid mt={1} gridAutoFlow={['row', 'column']}>
            <DoesWrapper>
                <DoesTitle>Technologies being used</DoesTitle>
                <DoesList>
                    <DoesItem>Webpack 4</DoesItem>
                    <DoesItem>React</DoesItem>
                    <DoesItem>Router - redux-saga-first-router</DoesItem>
                    <DoesItem>Client state management - Redux</DoesItem>
                    <DoesItem>Redux middleware - Redux-Saga</DoesItem>
                    <DoesItem>Client state management - React-easy-state</DoesItem>
                    <DoesItem>CSS in Js - Styled components</DoesItem>
                    <DoesItem>Server - Express</DoesItem>
                    <DoesItem>DB - PostgreSQL</DoesItem>
                    <DoesItem>DB Object interface - Massive</DoesItem>
                </DoesList>
            </DoesWrapper>
            <DoesWrapper mt={[1, 0]}>
                <DoesTitle>Features</DoesTitle>
                <DoesList>
                    <DoesItem>JWT authentication with emails</DoesItem>
                    <DoesItem>Forms</DoesItem>
                    <DoesItem>User profile</DoesItem>
                </DoesList>
            </DoesWrapper>
        </Grid>
    </Box>
)
