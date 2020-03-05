import React from 'react'
import { Flex, NavLink, SvgIcon, Box } from 'styles/ss-components'

// Local
import { Menu } from './Menu'

export const Header = ({ mobileHeaderHeight }) => {
    return (
        <Box className="grid-container">
            <Menu mobileHeaderHeight={mobileHeaderHeight} />
        </Box>
    )
}
