import React, { useRef, useState } from 'react'
import { Box, LI, UL, H3, Grid, P, Span, NavLink } from 'styles/ss-components'
import { ProjectTitle } from './common'

export const First = props => (
    <Box {...props}>
        <ProjectTitle>My first React project</ProjectTitle>
        <P mt={1}>
            While I was working as an Electronics Engineer, I was assigned to develop a
            Laboratory experiments management software.
        </P>
        <UL mt={2}>
            <LI>
                Instead of building the usual desktop solution using Delphi/Vb/C#, I
                turned to develop distributed system which will be available through a
                client anywhere
            </LI>
            <LI>Meteor enabled me to get started easily and build Full-Stack solution</LI>
            <LI>React made me excited to write a client structured with components</LI>
            <LI>React is the main reason I started web-coding.</LI>
            <LI>
                I was able to take advantage of community built components, this
                opportunity was the main reason to ditch the desktop way of development
            </LI>
        </UL>
    </Box>
)
