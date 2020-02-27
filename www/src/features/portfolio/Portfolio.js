import React, { useRef, useState } from 'react'
import { Box, Flex, H1, H2, H4, LI, UL, P } from 'styles/ss-components'
import { Project1 } from './projects/Project1'
import { Overtok } from './projects/Overtok'
import { Barcodes } from './projects/Barcodes'
import { Hydrantech } from './projects/Hydrantech'
import { First } from './projects/First'
import { Project2 } from './projects/Project2'
import { Site } from './projects/Site'
import { MobxHooksForm } from './projects/MobxHooksForm'
import { Cypress } from './projects/Cypress'

const PageTitle = props => <H1 textAlign="center" {...props} />

export const Portfolio = () => (
    <Box mb={8} className="grid-container padding-container">
        <Box mb={3}>
            <PageTitle mt={1}>
                <strong>Portfolio</strong>
            </PageTitle>
            <H4 mt={1} mb={3} textAlign="center">
                Projects I have done and the technologies I have used during my web
                development career
            </H4>
            {/* <P mt={1}>
                * Most of the recent and the best writen code is in private repositories
                and will be demonstrated upon request
            </P> */}
        </Box>

        <Cypress mt={2} />
        <MobxHooksForm mt={2} />
        <Site mt={2} />
        <Project2 mt={5} />
        <Project1 mt={5} />
        <Overtok mt={5} />
        <Barcodes mt={5} />
        <Hydrantech mt={5} />
        <First mt={5} />
    </Box>
)
