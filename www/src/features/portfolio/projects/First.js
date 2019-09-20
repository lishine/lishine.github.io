import React, { useRef, useState } from 'react'
import { Box, UL, H3, Grid, P, Span, NavLink } from 'styles/ss-components'
import { ProjectTitle, DoesItem } from '../common'

export const First = props => (
    <Box {...props}>
        <ProjectTitle>My first React project</ProjectTitle>
        <P mt={1}>
            While working as an Electronics Engineer, I was assigned to develop a
            Laboratory experiments management software.
        </P>
        <UL mt={2}>
            <DoesItem>
                Instead of building the usual desktop solution using Delphi/Vb/C#, I
                turned to develop distributed system which will be available through a
                client anywhere
            </DoesItem>
            <DoesItem>
                Meteor enabled me to get started easily and build Full-Stack solution
            </DoesItem>
            <DoesItem>
                React made me excited to write a client structured with components
            </DoesItem>
            <DoesItem>React is the main reason I started web-coding.</DoesItem>
            <DoesItem>
                I was able to take advantage of community built components, this
                opportunity was the main reason to ditch the desktop way of development
            </DoesItem>
        </UL>
    </Box>
)
