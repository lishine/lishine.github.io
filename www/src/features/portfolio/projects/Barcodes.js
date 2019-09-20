import React, { useRef, useState } from 'react'
import { Box, H4, LI, UL, NavLink, Image } from 'styles/ss-components'
import { ProjectTitle, SubRemark, SubLink } from '../common'

export const Barcodes = props => (
    <Box {...props}>
        <ProjectTitle>Manage barcodes for users</ProjectTitle>
        <SubRemark>Built from the ground up</SubRemark>
        <SubLink>
            <NavLink href="https://github.com/lishine/login-full-stack">
                Source - https://github.com/lishine/login-full-stack
            </NavLink>
        </SubLink>
        <H4 mt={1}>Features</H4>
        <UL>
            <LI>JWT authentication with emails</LI>
            <LI>Forms</LI>
            <LI>User profile</LI>
        </UL>
        <H4 mt={2}>Technologies being used</H4>
        <UL>
            <LI>Webpack 4</LI>
            <LI>React</LI>
            <LI>Router - redux-saga-first-router</LI>
            <LI>Client state management - Redux</LI>
            <LI>Redux middleware - Redux-Saga</LI>
            <LI>Client state management - React-easy-state</LI>
            <LI>CSS in Js - Styled components</LI>
            <LI>Server - Express</LI>
            <LI>DB - PostgreSQL</LI>
            <LI>DB Object interface - Massive</LI>
        </UL>
    </Box>
)
