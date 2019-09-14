import React, { useRef, useState } from 'react'
import { Box, Flex, H1, H2, H4, LI, UL, P } from 'styles/ss-components'
import { Salsa } from './projects/Salsa'
import { Overtok } from './projects/Overtok'
import { Barcodes } from './projects/Barcodes'
import { Hydrantech } from './projects/Hydrantech'
import { First } from './projects/First'
import { SBS } from './projects/SBS'
import { Site } from './projects/Site'

const PageTitle = props => <H1 textAlign="center" {...props} />

export const Index = () => (
    <Box mb={8} className="grid-container padding-container">
        <H4 my={2}>🚧 UNDER CONSTRUCTION 👷</H4>
        <Box mb={3}>
            <PageTitle>
                <strong>Portfolio</strong>
            </PageTitle>
            <H4 mb={3} textAlign="center">
                Projects I have done and technologies I have used during my web
                development career
            </H4>
            <P mt={1}>
                * Most of the recent and the best writen code is in private repositories
                and will be demonstrated upon request
            </P>
        </Box>

        <Site mt={2} />
        <SBS mt={5} />
        <Salsa mt={5} />
        <Overtok mt={5} />
        <Barcodes mt={5} />
        <Hydrantech mt={5} />
        <First mt={5} />
    </Box>
)
