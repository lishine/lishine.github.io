import React, { useRef, useState } from 'react'
import { Box, H4, LI, UL, NavLink, Image } from 'styles/ss-components'
import { ProjectTitle } from './common'

export const Barcodes = props => (
    <Box {...props}>
        <ProjectTitle>Manage barcodes for users</ProjectTitle>
        <H4 mt="5px">Built from the ground up</H4>
        <NavLink mt={1} href="https://github.com/lishine/login-full-stack">
            Source - https://github.com/lishine/login-full-stack
        </NavLink>
        <H4 mt={1}>Features</H4>
        <UL mt={1}>
            <LI>JWT authentication with emails</LI>
            <LI>Forms</LI>
            <LI>User profile</LI>
        </UL>
        <H4 mt={1}>Technologies being used</H4>
        <UL mt={1}>
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
