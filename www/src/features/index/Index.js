import React, { useRef, useState } from 'react'
import {
    Box,
    Flex,
    H1,
    H2,
    H4,
    LI,
    UL,
    H3,
    Grid,
    P,
    Span,
    NavLink,
    Image,
    DT,
} from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'
import styled from '@emotion/styled'
import { Salsa } from './projects/Salsa'
import { Overtok } from './projects/Overtok'
import { Barcodes } from './projects/Barcodes'
import { Hydrantech } from './projects/Hydrantech'
import { First } from './projects/First'

const PageTitle = props => <H1 borderBottom="1px solid currentColor" {...props} />

export const Index = () => (
    <Box mb={8} className="grid-container padding-container">
        <PageTitle mb={1}>
            <strong>Portfolio</strong>
        </PageTitle>
        <H4>
            Projects I have done and technologies I have used during my web development
            career
        </H4>
        <UL mt={1}>
            <LI>In a chronological order, from most recent to the first one</LI>
            <LI>
                Most of the recent and the best writen code is in private repositories
                that will be demonstrated upon request
            </LI>
        </UL>

        <Salsa />
        <Overtok />
        <Barcodes />
        <Hydrantech />
        <First />
    </Box>
)
