import React from 'react'
import { Box, Grid, DT, DD, NavLink } from 'styles/ss-components'
import { Phone, Israel, Email } from 'svg/icons'

const Page = () => (
    <Box className="grid-container padding-container">
        <Grid gridAutoFlow="row" gridRowGap={1} gridTemplateColumns="35px 1fr">
            <DT>
                <Phone />
            </DT>
            <DD>
                <NavLink rel="nofollow" href="tel:+972-52-3747324">
                    +972-52-3747324
                </NavLink>
            </DD>
            <DT>
                <Email fill="var(--tertiary)" />
            </DT>
            <DD>
                <NavLink rel="nofollow" href="mailto:vim55k@gmail.com">
                    vim55k@gmail.com
                </NavLink>
            </DD>
            <DT>
                <Israel />
            </DT>
            <DD>Israel</DD>
        </Grid>
    </Box>
)

export default Page
