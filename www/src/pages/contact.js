import React from 'react'
import Head from 'next/head'
import { Box, Grid, DT, DD, NavLink, Image, Flex } from 'styles/ss-components'
import { Phone, Israel, Email } from 'svg/icons'

const Page = () => (
    <>
        <Head>
            <title>Pavel Ravits - React Web Developer - Contact</title>
            <meta
                name="description"
                content="Pavel Ravits - React Web Developer - Contact"
            />
        </Head>

        <Flex
            flexDirection="column"
            alignItems={['center', 'flex-start']}
            mt={5}
            pl={5}
            className="grid-container padding-container"
        >
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
            <Image mt={3} width="200px" src="/photo.jpg" />
        </Flex>
    </>
)

export default Page
