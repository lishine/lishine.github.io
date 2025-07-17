import React from 'react'
import { Flex, NavLink, SvgIcon, Box } from 'styles/ss-components'

// Local
import { Menu } from './Menu'

export const Header = ({ mobileHeaderHeight }) => {
    return (
        <Box className="grid-container">
            <div style="font-size:25px">4 YEARS NOT UPDATED</div>
            <Menu mobileHeaderHeight={mobileHeaderHeight} />
        </Box>
    )
}
